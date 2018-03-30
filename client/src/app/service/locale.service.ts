import { Injectable } from '@angular/core';
import {CookieService} from "./cookie.service";
import {environment} from "../../environments/environment";

@Injectable()
export class LocaleService {

  constructor(
    private cookie:CookieService
  ) { }

  getUALang() : string{
    if(navigator.language){
      return navigator.language.toLowerCase();
    }else{
      return 'en-us'
    }
  }

  saveLocale():void{
    this.cookie.setCookie("lang",this.getUALang(),9999)
  }

  getLocale():string{
    if(this.cookie.getCookie("lang")===""){
      return "en-us"
    }else{
      return this.cookie.getCookie("lang").toLowerCase();
    }
  }

  onInit():void{
    if(this.cookie.getCookie("lang")===""&&!this.cookie.getCookie("auto_jump")){
      this.saveLocale();
      this.onInit();
    }else{
      if(this.cookie.getCookie("auto_jump")==="true"){

      }
      else {
        switch (this.cookie.getCookie("lang")) {
          case "en-us":
            window.location.replace(environment.multiDomain.en);
            this.cookie.setCookie("auto_jump", "true", 999);
            break;
          case "ja-jp":
            window.location.replace(environment.multiDomain.jp);
            this.cookie.setCookie("auto_jump", "true", 999);
            break;
          case "zh-cn":
            window.location.replace(environment.multiDomain.cn);
            this.cookie.setCookie("auto_jump", "true", 999);
            break;
          default:
            window.location.replace(environment.multiDomain.en);
            this.cookie.setCookie("auto_jump", "true", 999);
            break;
        }
      }
    }
  }
}
