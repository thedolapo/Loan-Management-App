import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManagementHomeComponent } from './customer-management-home.component';

describe('CustomerManagementHomeComponent', () => {
  let component: CustomerManagementHomeComponent;
  let fixture: ComponentFixture<CustomerManagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerManagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
