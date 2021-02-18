import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionHistoryComponent } from './loan-transaction-history.component';

describe('LoanTransactionHistoryComponent', () => {
  let component: LoanTransactionHistoryComponent;
  let fixture: ComponentFixture<LoanTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
