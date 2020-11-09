import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRepComponent } from './buyer-rep.component';

describe('BuyerRepComponent', () => {
  let component: BuyerRepComponent;
  let fixture: ComponentFixture<BuyerRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
