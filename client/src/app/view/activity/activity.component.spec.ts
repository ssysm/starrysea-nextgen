import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity.component';
import {ActivityService} from "../../service/activity.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {SpinnerComponent} from "../partical/spinner/spinner.component";
import {LocaleService} from "../../service/locale.service";
import {CookieService} from "../../service/cookie.service";
import {MetaService} from "../../service/meta.service";

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;
  let compiled:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComponent,SpinnerComponent ],
      imports:[HttpModule,RouterTestingModule],
      providers:[ActivityService,LocaleService,CookieService,MetaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have Activities Title',()=>{
    expect(compiled.querySelector('.h2').textContent).toContain('Activities')
  });
});
