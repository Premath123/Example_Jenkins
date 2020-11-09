import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeBuyComponent } from './representative-buy.component';

describe('RepresentativeBuyComponent', () => {
  let component: RepresentativeBuyComponent;
  let fixture: ComponentFixture<RepresentativeBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentativeBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
