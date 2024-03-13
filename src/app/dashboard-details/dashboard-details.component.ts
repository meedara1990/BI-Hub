import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '../types/responses/Dashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.scss'
})
export class DashboardDetailsComponent implements OnInit {
  @Input() id!: string;
  dashboard?: Dashboard;

  ngOnInit(): void {
    this.dashboard = history.state;
    console.log('Dashbaord', this.dashboard);
  }
}
