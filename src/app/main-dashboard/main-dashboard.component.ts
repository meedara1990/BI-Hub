import { Component } from '@angular/core';
import * as dashboards from './dashboards.json';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { MainDashboard } from '../types/responses/MainDashboard';
import { mainDashboardCardComponent } from '../main-dashboard-card/main-dashboard-card.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
  imports: [CommonModule, mainDashboardCardComponent, BodyComponent]
})
export class MainDashboardComponent {
  public mainDashboard: MainDashboard = dashboards;
}
