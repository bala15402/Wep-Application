import { ComponentFixture, TestBed } from '@angular/core/testing';

import { To17Component } from './to17.component';

describe('To17Component', () => {
  let component: To17Component;
  let fixture: ComponentFixture<To17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ To17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(To17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
