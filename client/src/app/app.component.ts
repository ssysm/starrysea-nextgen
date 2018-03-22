import {Component, OnInit} from '@angular/core';
import {routeAnimation} from "./common/animation";
import {LocaleService} from "./service/locale.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routeAnimation]
})
export class AppComponent implements OnInit{

  loaded:Boolean = false;
  constructor(
    private locale:LocaleService
  ){

  }

  ngOnInit(){
    this.loaded = true;
    this.locale.onInit();
  }

  public getRouteAnimation(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
