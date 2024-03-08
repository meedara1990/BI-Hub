import { Component } from '@angular/core';
import * as dashboards from '../../assets/dashboards.json';
import { CommonModule } from '@angular/common';
import { DashbaordCardComponent } from '../dashbaord-card/dashbaord-card.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
  imports: [CommonModule, DashbaordCardComponent]
})
export class MainDashboardComponent {
  public dashboards = dashboards;
}
