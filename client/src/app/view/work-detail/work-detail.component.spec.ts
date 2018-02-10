import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailComponent } from './work-detail.component';
import {WorkService} from "../../service/work.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {SpinnerComponent} from "../partical/spinner/spinner.component";

describe('WorkDetailComponent', () => {
  let component: WorkDetailComponent;
  let fixture: ComponentFixture<WorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailComponent,SpinnerComponent ],
      providers:[WorkService],
      imports:[HttpModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
