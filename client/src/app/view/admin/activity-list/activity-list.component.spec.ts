import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListComponent } from './activity-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivityService} from "../../../service/activity.service";
import {LocaleService} from "../../../service/locale.service";
import {HttpModule} from "@angular/http";
import {CookieService} from "../../../service/cookie.service";

describe('ActivityListComponent', () => {
  let component: ActivityListComponent;
  let fixture: ComponentFixture<ActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListComponent ],
      imports:[RouterTestingModule,HttpModule],
      providers:[ActivityService,LocaleService,CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
