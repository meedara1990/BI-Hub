import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Dashboards } from '../types/responses/Dashboards';
import { Dashboard } from '../types/responses/Dashboard';
@Component({
  selector: 'app-main-dashboard-card',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './main-dashboard-card.component.html',
  styleUrl: './main-dashboard-card.component.scss'
})
export class mainDashboardCardComponent implements OnInit {
  constructor(private readonly router: Router) {}
  nmgChildren: Dashboards[] = [];
  nmbChildren: Dashboards[] = [];
  bgbChildren: Dashboards[] = [];
  @Input()
  dashboard!: Dashboard;

  ngOnInit(): void {
    this.nmgChildren = this.dashboard.children.filter(
      (dashboard) => dashboard.childGroup === 'NMG'
    );
    this.nmbChildren = this.dashboard.children.filter(
      (dashboard) => dashboard.childGroup === 'NMB'
    );
    this.bgbChildren = this.dashboard.children.filter(
      (dashboard) => dashboard.childGroup === 'BGB'
    );
  }

  openDashboards() {
    this.router.navigate(['/dashboards', this.dashboard.id], {
      state: this.dashboard
    });
  }
  openChildDashboard(childDashboard: Dashboards) {
    const detailsURL = `/dashboards-details/${this.dashboard.id}/${childDashboard.childId}`;
    console.log('detailsURL', detailsURL, this.dashboard);
    this.router.navigate([detailsURL], {
      state: childDashboard
    });
  }
}
