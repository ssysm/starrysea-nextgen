import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FundingManagementComponent} from "../funding-management/funding-management.component";
import {QaManagementComponent} from "../qa-management/qa-management.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextSlicePipe} from "../../../common/pipe/text-slice.pipe";
import {ActivityService} from "../../../service/activity.service";
import {FundingService} from "../../../service/funding.service";
import {QaService} from "../../../service/qa.service";
import {HttpModule} from "@angular/http";
import {WorkService} from "../../../service/work.service";
import {WorkListComponent} from "../work-list/work-list.component";
import {ActivityListComponent} from "../activity-list/activity-list.component";
import {UserManagementComponent} from "../user-management/user-management.component";
import {LocaleService} from "../../../service/locale.service";
import {CookieService} from "../../../service/cookie.service";
import {AuthService} from "../../../service/auth.service";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, FundingManagementComponent, QaManagementComponent, TextSlicePipe,WorkListComponent,ActivityListComponent,UserManagementComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, HttpModule],
      providers: [ActivityService,CookieService,AuthService,LocaleService, FundingService, QaService, WorkService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
