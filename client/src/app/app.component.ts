import {Component, OnInit} from '@angular/core';
import {routeAnimation} from "./common/animation";
import {LocaleService} from "./service/locale.service";
import { ConsoleEasterEgg } from './common/console-easter-egg';

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

  consoleegg = new ConsoleEasterEgg();


  ngOnInit(){
    this.loaded = true;
    this.locale.onInit();
    this.consoleegg.log();
  }

  public getRouteAnimation(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
