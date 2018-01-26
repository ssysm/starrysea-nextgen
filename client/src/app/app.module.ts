import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { ActivityService } from './service/activity.service';
import { FundingService } from './service/funding.service';
import { WorkService } from './service/work.service';
import { WorkComponent } from './view/work/work.component';
import { ActivityComponent } from './view/activity/activity.component';
import { NavbarComponent } from './view/partical/navbar/navbar.component';
import { ActivityDetailComponent } from './view/activity-detail/activity-detail.component';
import { WorkDetailComponent } from './view/work-detail/work-detail.component';
import { NotFoundComponent } from './view/partical/not-found/not-found.component';
import { AboutComponent } from './view/about/about.component';
import { DashboardComponent } from './view/admin/dashboard/dashboard.component';
import { UserManagementComponent } from './view/admin/user-management/user-management.component';
import { ActivityManagementComponent } from './view/admin/activity-management/activity-management.component';
import { WorkManagementComponent } from './view/admin/work-management/work-management.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, BrowserXhr} from "@angular/http";
import {cros} from "./common/cros";
import { FooterComponent } from './view/partical/footer/footer.component';
import {AdminGuardService} from "./common/admin-guard.service";
import { AuthComponent } from './view/admin/auth/auth.component';
import {AuthService} from "./service/auth.service";
import {FileInputAccessorModule} from "file-input-accessor";
import { FundingManagementComponent } from './view/admin/funding-management/funding-management.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ActivityComponent,
    NavbarComponent,
    ActivityDetailComponent,
    WorkDetailComponent,
    NotFoundComponent,
    AboutComponent,
    DashboardComponent,
    UserManagementComponent,
    ActivityManagementComponent,
    WorkManagementComponent,
    FooterComponent,
    AuthComponent,
    FundingManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ActivityService,
    FundingService,
    AuthService,
    WorkService,
    AdminGuardService,
    FileInputAccessorModule,
    {
    provide: BrowserXhr,
    useClass:cros
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
