import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulkCardComponent } from './create-bulk-card.component';

describe('CreateBulkCardComponent', () => {
  let component: CreateBulkCardComponent;
  let fixture: ComponentFixture<CreateBulkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBulkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBulkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
