import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '../types/responses/Dashboard';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import * as dashboards from '../../assets/dashboards.json';
import { MainDashboard } from '../types/responses/MainDashboard';
import { DashboardDetailsComponent } from '../dashboard-details/dashboard-details.component';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [CommonModule, NgbNavModule, DashboardDetailsComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent implements OnInit {
  @Input() id!: string;
  dashboard?: Dashboard;
  active = 1;
  public mainDashboard: MainDashboard = dashboards;
  ngOnInit(): void {
    this.dashboard = history.state;
    console.log('Dashbaord', this.dashboard);
  }
  
}
