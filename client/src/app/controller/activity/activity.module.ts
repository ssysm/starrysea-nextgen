import {CUSTOM_ELEMENTS_SCHEMA,NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ActivityComponent} from "../../view/activity/activity.component";
import {ActivityDetailComponent} from "../../view/activity-detail/activity-detail.component";
import {ActivityRoutingModule} from "./activity-routing.module";
import {ActivityService} from "../../service/activity.service";
import {FundingService} from "../../service/funding.service";

@NgModule({
  imports:[
    CommonModule,
    ActivityRoutingModule
  ],
  declarations:[
    ActivityComponent,
    ActivityDetailComponent
  ],
  providers:[
    ActivityService,
    FundingService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class ActivityModule { }
