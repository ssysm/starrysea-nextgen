import { Component, OnInit } from '@angular/core';
import {CookieService} from "../../../service/cookie.service";
import {LocaleService} from "../../../service/locale.service";
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private cookie:CookieService,
    private locale:LocaleService
  ) { }

  ngOnInit() {
  }

  selectLang(locale:string):void{
    this.cookie.deleteCookie();
    this.cookie.setCookie("lang",locale,9999);
    this.cookie.setCookie("auto_jump","false",9999);
    this.locale.onInit();
  }

}
