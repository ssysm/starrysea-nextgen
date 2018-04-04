import {CUSTOM_ELEMENTS_SCHEMA,NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {AdminGuardService} from "../../common/guard/admin-guard.service";
import {WorkService} from "../../service/work.service";
import {ActivityService} from "../../service/activity.service";
import {FundingService} from "../../service/funding.service";
import {AuthService} from "../../service/auth.service";
import {DashboardComponent} from "../../view/admin/dashboard/dashboard.component";
import {WorkManagementComponent} from "../../view/admin/work-management/work-management.component";
import {ActivityManagementComponent} from "../../view/admin/activity-management/activity-management.component";
import {QaManagementComponent} from "../../view/admin/qa-management/qa-management.component";
import {UserManagementComponent} from "../../view/admin/user-management/user-management.component";
import {WorkListComponent} from "../../view/admin/work-list/work-list.component";
import {ActivityListComponent} from "../../view/admin/activity-list/activity-list.component";
import {QaService} from "../../service/qa.service";
import {AuthComponent} from "../../view/admin/auth/auth.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextSlicePipe} from "../../common/pipe/text-slice.pipe";
import {FundingManagementComponent} from "../../view/admin/funding-management/funding-management.component";

@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations:[
    AuthComponent,
    DashboardComponent,
    WorkManagementComponent,
    ActivityManagementComponent,
    QaManagementComponent,
    UserManagementComponent,
    WorkListComponent,
    ActivityListComponent,
    FundingManagementComponent,
    TextSlicePipe
  ],
  providers:[
    AdminGuardService,
    WorkService,
    ActivityService,
    FundingService,
    AuthService,
    QaService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AdminModule {

}
