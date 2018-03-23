import { Component, OnInit } from '@angular/core';
import {CookieService} from "../../../service/cookie.service";
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private cookie:CookieService
  ) { }

  ngOnInit() {
  }

  selectLang(locale:string):void{
    this.cookie.setCookie("lang",locale,9999);
    window.location.reload();
  }

}
