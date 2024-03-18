import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Dashboards } from '../types/responses/Dashboards';
import { SanitizePipe } from '../shared/sanitize.pipe';
@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, SanitizePipe],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.scss'
})
export class DashboardDetailsComponent implements OnInit {
  @Input()
  dashboard!: Dashboards;

  constructor(private readonly router: Router) {}
  ngOnInit(): void {
    this.dashboard = history.state;
  }
}
