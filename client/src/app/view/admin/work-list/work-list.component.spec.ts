import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListComponent } from './work-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {WorkService} from "../../../service/work.service";
import {HttpModule} from "@angular/http";
import {LocaleService} from "../../../service/locale.service";
import {CookieService} from "../../../service/cookie.service";

describe('WorkListComponent', () => {
  let component: WorkListComponent;
  let fixture: ComponentFixture<WorkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkListComponent ],
      imports:[RouterTestingModule,HttpModule],
      providers:[WorkService,LocaleService,CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
