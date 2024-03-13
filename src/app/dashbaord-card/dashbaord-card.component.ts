import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Dashboards } from '../types/responses/Dashboards';
import { Dashboard } from '../types/responses/Dashboard';
@Component({
  selector: 'app-dashbaord-card',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dashbaord-card.component.html',
  styleUrl: './dashbaord-card.component.scss'
})
export class DashbaordCardComponent implements OnInit {
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
    this.router.navigate(['/dashboad-details', this.dashboard.id], {
      state: this.dashboard
    });
  }
}
