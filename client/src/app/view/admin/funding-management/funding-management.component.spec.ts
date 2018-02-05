import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingManagementComponent } from './funding-management.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FundingService} from "../../../service/funding.service";
import {ActivityService} from "../../../service/activity.service";

describe('FundingManagementComponent', () => {
  let component: FundingManagementComponent;
  let fixture: ComponentFixture<FundingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingManagementComponent ],
      imports:[HttpModule,ReactiveFormsModule,FormsModule],
      providers:[FundingService,ActivityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
