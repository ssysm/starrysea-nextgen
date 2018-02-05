import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkManagementComponent } from './work-management.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WorkService} from "../../../service/work.service";

describe('WorkManagementComponent', () => {
  let component: WorkManagementComponent;
  let fixture: ComponentFixture<WorkManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkManagementComponent ],
      imports:[HttpModule,FormsModule,ReactiveFormsModule],
      providers:[WorkService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
