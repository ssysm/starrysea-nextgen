import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import {ActivityComponent} from "../../view/activity/activity.component";
import {ActivityDetailComponent} from "../../view/activity-detail/activity-detail.component";

const routes : Routes =[
  {
    path:'',
    component:ActivityComponent
  },
  {
    path:'detail/:id',
    component:ActivityDetailComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ActivityRoutingModule { }
