import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '../types/responses/Dashboard';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardDetailsComponent } from '../dashboard-details/dashboard-details.component';
import { Dashboards } from '../types/responses/Dashboards';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [CommonModule, NgbNavModule, DashboardDetailsComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent implements OnInit {
  @Input() id!: string;
  dashboard!: Dashboard;
  active = 1;
  nmgChildren: Dashboards[] = [];
  nmbChildren: Dashboards[] = [];
  bgbChildren: Dashboards[] = [];

  ngOnInit(): void {
    this.dashboard = history.state;
    console.log('Dashbaord', this.dashboard);
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
}
