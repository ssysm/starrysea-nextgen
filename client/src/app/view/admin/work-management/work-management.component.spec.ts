import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkManagementComponent } from './work-management.component';

describe('WorkManagementComponent', () => {
  let component: WorkManagementComponent;
  let fixture: ComponentFixture<WorkManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkManagementComponent ]
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
