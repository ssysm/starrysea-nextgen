import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingManagementComponent } from './funding-management.component';

describe('FundingManagementComponent', () => {
  let component: FundingManagementComponent;
  let fixture: ComponentFixture<FundingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
