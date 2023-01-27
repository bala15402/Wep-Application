import { ComponentFixture, TestBed } from '@angular/core/testing';

import { To18Component } from './to18.component';

describe('To18Component', () => {
  let component: To18Component;
  let fixture: ComponentFixture<To18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ To18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(To18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
