import { Component } from '@angular/core';
import * as dashboards from '../../assets/dashboards.json';
import { CommonModule } from '@angular/common';
import { DashbaordCardComponent } from '../dashbaord-card/dashbaord-card.component';
import { BodyComponent } from '../body/body.component';
import { MainDashboard } from '../types/responses/MainDashboard';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
  imports: [CommonModule, DashbaordCardComponent, BodyComponent]
})
export class MainDashboardComponent {
  public mainDashboard: MainDashboard = dashboards;
}
