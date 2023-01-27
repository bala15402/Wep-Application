import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkkComponent } from './kkk.component';

describe('KkkComponent', () => {
  let component: KkkComponent;
  let fixture: ComponentFixture<KkkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
