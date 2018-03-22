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
      return navigator.language
    }else{
      return 'en-US'
    }
  }

  saveLocale():void{
    this.cookie.setCookie("lang",this.getUALang(),9999)
  }

  onInit():void{
    if(this.cookie.getCookie("lang")===""){
      this.saveLocale();
      this.onInit();
    }else{
      switch (this.cookie.getCookie("lang")){
        case "en-US":
          window.location.replace(environment.multiDomain.en);
          break;
        case "ja-JP":
          window.location.replace(environment.multiDomain.jp);
          break;
        case "zh-CN":
          window.location.replace(environment.multiDomain.cn);
          break;
        default:
          window.location.replace(environment.multiDomain.en);
      }
    }
  }
}
