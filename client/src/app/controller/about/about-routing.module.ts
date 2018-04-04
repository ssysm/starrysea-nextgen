import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AboutComponent} from "../../view/about/about.component";
import {QaComponent} from "../../view/qa/qa.component";

const routes: Routes = [
  {
    path:'',
    component:AboutComponent
  },
  {
    path:'question',
    component:QaComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AboutRoutingModule {

}
