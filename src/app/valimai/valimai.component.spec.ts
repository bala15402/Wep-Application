import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValimaiComponent } from './valimai.component';

describe('ValimaiComponent', () => {
  let component: ValimaiComponent;
  let fixture: ComponentFixture<ValimaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValimaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValimaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
