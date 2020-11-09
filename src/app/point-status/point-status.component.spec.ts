import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointStatusComponent } from './point-status.component';

describe('PointStatusComponent', () => {
  let component: PointStatusComponent;
  let fixture: ComponentFixture<PointStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
