import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaComponent } from './qa.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {QaService} from "../../service/qa.service";
import {SpinnerComponent} from "../partical/spinner/spinner.component";

describe('QaComponent', () => {
  let component: QaComponent;
  let fixture: ComponentFixture<QaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaComponent,SpinnerComponent ],
      imports:[FormsModule,ReactiveFormsModule,HttpModule],
      providers:[QaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
