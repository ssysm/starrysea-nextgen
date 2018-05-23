import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailComponent } from './activity-detail.component';
import {ActivityService} from "../../service/activity.service";
import {FundingService} from "../../service/funding.service";
import {RouterTestingModule} from "@angular/router/testing";
import {SpinnerComponent} from "../partical/spinner/spinner.component";
import {LocaleService} from "../../service/locale.service";
import {HttpModule} from "@angular/http";
import {CookieService} from "../../service/cookie.service";
import {MetaService} from "../../service/meta.service";

describe('ActivityDetailComponent', () => {
  let component: ActivityDetailComponent;
  let fixture: ComponentFixture<ActivityDetailComponent>;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailComponent,SpinnerComponent ],
      providers:[ActivityService,LocaleService,FundingService,CookieService,MetaService],
      imports:[RouterTestingModule,HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
