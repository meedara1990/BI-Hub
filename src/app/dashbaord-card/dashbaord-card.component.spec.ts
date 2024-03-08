import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordCardComponent } from './dashbaord-card.component';

describe('DashbaordCardComponent', () => {
  let component: DashbaordCardComponent;
  let fixture: ComponentFixture<DashbaordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbaordCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashbaordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
