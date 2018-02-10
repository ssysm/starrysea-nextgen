import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {VersionService} from "../../service/version.service";
import {HttpModule} from "@angular/http";
import {By} from "@angular/platform-browser";

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let compiled:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      providers:[VersionService],
      imports:[HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should have a About Us Title',()=>{
    expect(compiled.querySelector('.introh1').textContent).toContain('About Us');
  });
  it('should have a blockquote',()=>{
    expect(compiled.querySelector('.blockquote')).toBeTruthy();
  });
  it('should have system info',()=>{
    expect(compiled.querySelector('#sysInfo')).toBeTruthy();
  });
  it('should have a qa entry',()=>{
    expect(compiled.querySelector('.qBox')).toBeTruthy();
  })
});
