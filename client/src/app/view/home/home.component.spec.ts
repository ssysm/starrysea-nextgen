import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled : any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a bg image',()=>{
    expect(compiled.querySelector('.aq-bg')).toBeTruthy();
  });
  it('should have an intro title',()=>{
    expect(compiled.querySelector('.title').textContent).toContain('We Are Starry Sea Volunteers Association')
  });
  it('should have a intro image',()=>{
    expect(compiled.querySelector('.img-center').src).toContain('/assets/img/TOW.png')
  });
  it('should have a about text',()=>{
    expect(compiled.querySelector('.about')).toBeTruthy();
  });
  it('should have a button that go to about page',()=>{
    expect(compiled.querySelector('.btn').href).toContain('/about');
  })

});
