import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaanaduComponent } from './maanadu.component';

describe('MaanaduComponent', () => {
  let component: MaanaduComponent;
  let fixture: ComponentFixture<MaanaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaanaduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaanaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
