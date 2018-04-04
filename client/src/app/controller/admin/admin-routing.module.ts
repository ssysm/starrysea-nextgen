import {ActivityManagementComponent} from "../../view/admin/activity-management/activity-management.component";
import {AuthComponent} from "../../view/admin/auth/auth.component";
import {UserManagementComponent} from "../../view/admin/user-management/user-management.component";
import {WorkManagementComponent} from "../../view/admin/work-management/work-management.component";
import {DashboardComponent} from "../../view/admin/dashboard/dashboard.component";
import {AdminGuardService} from "../../common/guard/admin-guard.service";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes :Routes = [
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
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AdminRoutingModule {

}
