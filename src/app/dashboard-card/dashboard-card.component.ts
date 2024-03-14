import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Dashboards } from '../types/responses/Dashboards';
import { Dashboard } from '../types/responses/Dashboard';
@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent implements OnInit {
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

  onClick() {
    this.router.navigate(['/dashboads', this.dashboard.id], {
      state: this.dashboard
    });
  }
}
