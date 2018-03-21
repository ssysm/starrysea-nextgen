import { Injectable } from '@angular/core';

@Injectable()
export class LocaleService {

  constructor() { }

  getUALang(){
    if(!localStorage.getItem('lang')){
      if(window.navigator.language){

      }else{
        return 'en-US'
      }
    }else{
      return 'en-US'
    }
  }

  getLocale(){
    return localStorage.getItem('lang');
  }

  setUALang(lang:string){
    localStorage.setItem('lang',lang)
  }

}
