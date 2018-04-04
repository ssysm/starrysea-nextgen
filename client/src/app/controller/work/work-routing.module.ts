import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {WorkComponent} from "../../view/work/work.component";
import {WorkDetailComponent} from "../../view/work-detail/work-detail.component";

const routes :Routes=[
  {
    path:'',
    component:WorkComponent
  },
  {
    path:'detail/:id',
    component:WorkDetailComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class WorkRoutingModule {

}
