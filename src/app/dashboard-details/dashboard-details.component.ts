import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Dashboards } from '../types/responses/Dashboards';
@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.scss'
})
export class DashboardDetailsComponent {
  @Input()
  dashboard!: Dashboards;
  @Input() color: string = '';
  @Input() bgcolor: string = '';
  @Input() faIcon: string = '';

  constructor(private readonly router: Router) {}

  onClick() {
    this.router.navigate(['/dashboads']);
  }
}
