import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoolRecordsComponent } from './spool-records.component';

describe('SpoolRecordsComponent', () => {
  let component: SpoolRecordsComponent;
  let fixture: ComponentFixture<SpoolRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoolRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoolRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
