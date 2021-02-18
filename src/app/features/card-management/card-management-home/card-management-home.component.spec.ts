import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardManagementHomeComponent } from './card-management-home.component';

describe('CardManagementHomeComponent', () => {
  let component: CardManagementHomeComponent;
  let fixture: ComponentFixture<CardManagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardManagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
