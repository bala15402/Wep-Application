import { ComponentFixture, TestBed } from '@angular/core/testing';

import { To19Component } from './to19.component';

describe('To19Component', () => {
  let component: To19Component;
  let fixture: ComponentFixture<To19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ To19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(To19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
