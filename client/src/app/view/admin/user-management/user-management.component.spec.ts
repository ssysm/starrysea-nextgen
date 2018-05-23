import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementComponent } from './user-management.component';
import {TextSlicePipe} from "../../../common/pipe/text-slice.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {LocaleService} from "../../../service/locale.service";
import {HttpModule} from "@angular/http";

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementComponent,TextSlicePipe],
      imports:[FormsModule,ReactiveFormsModule,HttpModule],
      providers:[AuthService,LocaleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
