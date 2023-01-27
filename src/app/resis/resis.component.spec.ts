import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisComponent } from './resis.component';

describe('ResisComponent', () => {
  let component: ResisComponent;
  let fixture: ComponentFixture<ResisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
