import {Component, OnInit,HostBinding, ViewChild} from '@angular/core';
import {routeAnimation} from "./common/animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routeAnimation]
})
export class AppComponent implements OnInit{

  loaded:Boolean = false;
  constructor(){

  }

  ngOnInit(){
    this.loaded = true;
  }

  public getRouteAnimation(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
