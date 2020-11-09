import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avonpartner1Component } from './avonpartner1.component';

describe('Avonpartner1Component', () => {
  let component: Avonpartner1Component;
  let fixture: ComponentFixture<Avonpartner1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avonpartner1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avonpartner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
