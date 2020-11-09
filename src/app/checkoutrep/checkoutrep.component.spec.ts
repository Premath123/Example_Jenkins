import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutrepComponent } from './checkoutrep.component';

describe('CheckoutrepComponent', () => {
  let component: CheckoutrepComponent;
  let fixture: ComponentFixture<CheckoutrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
