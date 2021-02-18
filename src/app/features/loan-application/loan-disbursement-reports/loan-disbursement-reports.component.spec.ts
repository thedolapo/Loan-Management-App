import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbursementReportsComponent } from './loan-disbursement-reports.component';

describe('LoanDisbursementReportsComponent', () => {
  let component: LoanDisbursementReportsComponent;
  let fixture: ComponentFixture<LoanDisbursementReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDisbursementReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDisbursementReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
