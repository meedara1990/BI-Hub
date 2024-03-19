import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '../types/responses/Dashboard';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Dashboards } from '../types/responses/Dashboards';
import { Router } from '@angular/router';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [CommonModule, NgbNavModule, DashboardCardComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent implements OnInit {
  constructor(private readonly router: Router, private _location: Location) {}
  @Input() id!: string;
  dashboard!: Dashboard;
  active = 1;
  nmgChildren: Dashboards[] = [];
  nmbChildren: Dashboards[] = [];
  bgbChildren: Dashboards[] = [];
  noDashboardsMessage = 'Nothing to see here.Try searching for something else.';

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
    this.active =
      this.nmgChildren.length === 0
        ? this.nmbChildren.length === 0
          ? 3
          : 2
        : 1;
  }
  backClick() {
    this._location.back();
  }
}
