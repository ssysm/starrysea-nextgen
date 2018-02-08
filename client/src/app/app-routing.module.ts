import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {ActivityComponent} from "./view/activity/activity.component";
import {ActivityDetailComponent} from "./view/activity-detail/activity-detail.component";
import {WorkComponent} from "./view/work/work.component";
import {WorkDetailComponent} from "./view/work-detail/work-detail.component";
import {NotFoundComponent} from "./view/partical/not-found/not-found.component";
import {AboutComponent} from "./view/about/about.component";
import {DashboardComponent} from "./view/admin/dashboard/dashboard.component";
import {UserManagementComponent} from "./view/admin/user-management/user-management.component";
import {ActivityManagementComponent} from "./view/admin/activity-management/activity-management.component";
import {WorkManagementComponent} from "./view/admin/work-management/work-management.component";
import {AuthComponent} from "./view/admin/auth/auth.component";
import {AdminGuardService} from "./common/admin-guard.service";
import {QaComponent} from "./view/qa/qa.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'activity',
    children:[
      {
        path:'',
        component:ActivityComponent
      },
      {
        path:'detail/:id',
        component:ActivityDetailComponent
      }
    ]
  },
  {
    path:'work',
    children:[
      {
        path:'',
        component:WorkComponent
      },
      {
        path:'detail/:id',
        component:WorkDetailComponent
      }
    ]
  },
  {
    path:'about',
    children:[
      {
        path:'',
        component:AboutComponent
      },
      {
        path:'question',
        component:QaComponent
      }
    ]
  },
  {
    path:'admin',
    children:[
      {
        path:'',
        component:DashboardComponent,
        canActivate:[AdminGuardService]
      },
      {
        path:'user',
        component:UserManagementComponent,
        canActivate:[AdminGuardService]

      },
      {
        path:'activity',
        component:ActivityManagementComponent,
        canActivate:[AdminGuardService]
      },
      {
        path:'work',
        component:WorkManagementComponent,
        canActivate:[AdminGuardService]
      },
      {
        path:'auth',
        component:AuthComponent,
      }
    ]
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
