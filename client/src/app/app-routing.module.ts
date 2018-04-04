import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {NotFoundComponent} from "./view/partical/not-found/not-found.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'activity',
    loadChildren:'app/controller/activity/activity.module#ActivityModule'
  },
  {
    path:'work',
    loadChildren:'app/controller/work/work.module#WorkModule'
  },
  {
    path:'about',
    loadChildren:'app/controller/about/about.module#AboutModule'
  },
  {
    path:'admin',
    loadChildren:'app/controller/admin/admin.module#AdminModule'
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
