import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaManagementComponent } from './qa-management.component';
import {QaService} from "../../../service/qa.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TextSlicePipe} from "../../../common/pipe/text-slice.pipe";
import {LocaleService} from "../../../service/locale.service";
import {CookieService} from "../../../service/cookie.service";

describe('QaManagementComponent', () => {
  let component: QaManagementComponent;
  let fixture: ComponentFixture<QaManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaManagementComponent,TextSlicePipe ],
      providers:[QaService,LocaleService,CookieService],
      imports:[FormsModule,ReactiveFormsModule,HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
