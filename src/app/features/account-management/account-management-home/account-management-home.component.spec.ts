import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagementHomeComponent } from './account-management-home.component';

describe('AccountManagementHomeComponent', () => {
  let component: AccountManagementHomeComponent;
  let fixture: ComponentFixture<AccountManagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountManagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
