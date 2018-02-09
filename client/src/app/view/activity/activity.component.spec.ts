import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity.component';
import {ActivityService} from "../../service/activity.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {SpinnerComponent} from "../partical/spinner/spinner.component";

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComponent,SpinnerComponent ],
      imports:[HttpModule,RouterTestingModule],
      providers:[ActivityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
