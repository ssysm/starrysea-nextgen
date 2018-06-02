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

  selectLang(locale:string):void{
    this.cookie.deleteCookie();
    this.cookie.setCookie("lang",locale,9999);
    this.cookie.setCookie("auto_redirect","select",9999);
    this.onInit();
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

  redirect(lang:string){
    switch (lang) {
      case "en-us":
        window.location.replace(environment.multiDomain.en);
        break;
      case "ja-jp":
        window.location.replace(environment.multiDomain.jp);
        break;
      case "zh-cn":
        window.location.replace(environment.multiDomain.cn);
        break;
      default:
        window.location.replace(environment.multiDomain.en);
        break;
    }
  }
  /**
   *语言选择，只检测初始path
   *@cookie:lang:语言
   *@cookie:auto_redirect:自动跳转(不仅是bool)
   */
  onInit():void {
    if (window.location.pathname === '/') {
      if (this.cookie.getCookie("lang") === "" && !this.cookie.getCookie("auto_redirect")) {
        this.saveLocale();
        this.onInit();
      } else {
        if (this.cookie.getCookie("auto_redirect") === "select") {
          this.cookie.setCookie('auto_redirect','select_redirect',999);
          this.redirect(this.cookie.getCookie('lang'))
        }
        else if(this.cookie.getCookie('auto_redirect') === "select_redirect"){
        }
        else if(this.cookie.getCookie("auto_redirect") === "true"){
        }
        else {
          this.cookie.setCookie("auto_redirect", "true", 999);
          this.redirect(this.cookie.getCookie("lang"))
        }
      }
    }
  }
}
