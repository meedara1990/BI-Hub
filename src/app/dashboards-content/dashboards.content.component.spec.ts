import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsContentComponent } from './dashboards.content.component';

describe('DashboardsContentComponent', () => {
  let component: DashboardsContentComponent;
  let fixture: ComponentFixture<DashboardsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardsContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
