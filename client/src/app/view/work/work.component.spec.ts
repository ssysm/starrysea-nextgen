import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';
import {WorkService} from "../../service/work.service";
import {RouterTestingModule} from "@angular/router/testing";
import {SpinnerComponent} from "../partical/spinner/spinner.component";
import {LocaleService} from "../../service/locale.service";
import {CookieService} from "../../service/cookie.service";
import {MetaService} from "../../service/meta.service";
import {HttpModule} from "@angular/http";

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent,SpinnerComponent ],
      imports:[HttpModule,RouterTestingModule],
      providers:[WorkService,LocaleService,CookieService,MetaService]
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
