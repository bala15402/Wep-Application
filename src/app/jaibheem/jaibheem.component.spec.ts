import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaibheemComponent } from './jaibheem.component';

describe('JaibheemComponent', () => {
  let component: JaibheemComponent;
  let fixture: ComponentFixture<JaibheemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaibheemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaibheemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
