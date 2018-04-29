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
    private locale:LocaleService
  ) { }

  ngOnInit() {
  }

  selectLang(locale:string):void{
    this.locale.selectLang(locale)
  }

}
