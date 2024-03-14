import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '../types/responses/Dashboard';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [CommonModule, NgbNavModule],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent implements OnInit {
  @Input() id!: string;
  dashboard?: Dashboard;
  active = 1;
  ngOnInit(): void {
    this.dashboard = history.state;
    console.log('Dashbaord', this.dashboard);
  }
}
