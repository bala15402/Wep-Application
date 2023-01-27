import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnanComponent } from './karnan.component';

describe('KarnanComponent', () => {
  let component: KarnanComponent;
  let fixture: ComponentFixture<KarnanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarnanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
