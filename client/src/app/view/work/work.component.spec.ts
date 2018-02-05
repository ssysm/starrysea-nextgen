import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';
import {HttpModule} from "@angular/http";
import {WorkService} from "../../service/work.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent ],
      imports:[HttpModule,RouterTestingModule],
      providers:[WorkService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
