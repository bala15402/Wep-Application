import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MooComponent } from './moo.component';

describe('MooComponent', () => {
  let component: MooComponent;
  let fixture: ComponentFixture<MooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
