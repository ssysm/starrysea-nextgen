import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagementComponent } from './activity-management.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivityService} from "../../../service/activity.service";
import {HttpModule} from "@angular/http";
import {LocaleService} from "../../../service/locale.service";
import {CookieService} from "../../../service/cookie.service";

describe('ActivityManagementComponent', () => {
  let component: ActivityManagementComponent;
  let fixture: ComponentFixture<ActivityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagementComponent ],
      imports:[FormsModule,HttpModule,ReactiveFormsModule],
      providers:[ActivityService,LocaleService,CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
