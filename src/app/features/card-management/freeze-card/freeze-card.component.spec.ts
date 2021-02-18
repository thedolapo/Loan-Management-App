import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeCardComponent } from './freeze-card.component';

describe('FreezeCardComponent', () => {
  let component: FreezeCardComponent;
  let fixture: ComponentFixture<FreezeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
