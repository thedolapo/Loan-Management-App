import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulkAccountComponent } from './create-bulk-account.component';

describe('CreateBulkAccountComponent', () => {
  let component: CreateBulkAccountComponent;
  let fixture: ComponentFixture<CreateBulkAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBulkAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBulkAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
