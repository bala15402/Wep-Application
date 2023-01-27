import { ComponentFixture, TestBed } from '@angular/core/testing';

import { To16Component } from './to16.component';

describe('To16Component', () => {
  let component: To16Component;
  let fixture: ComponentFixture<To16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ To16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(To16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
