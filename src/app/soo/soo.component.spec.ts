import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SooComponent } from './soo.component';

describe('SooComponent', () => {
  let component: SooComponent;
  let fixture: ComponentFixture<SooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
