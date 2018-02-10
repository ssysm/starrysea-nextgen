import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailComponent } from './activity-detail.component';
import {ActivityService} from "../../service/activity.service";
import {HttpModule} from "@angular/http";
import {FundingService} from "../../service/funding.service";
import {RouterTestingModule} from "@angular/router/testing";
import {SpinnerComponent} from "../partical/spinner/spinner.component";

describe('ActivityDetailComponent', () => {
  let component: ActivityDetailComponent;
  let fixture: ComponentFixture<ActivityDetailComponent>;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailComponent,SpinnerComponent ],
      providers:[ActivityService,FundingService],
      imports:[HttpModule,RouterTestingModule]
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
