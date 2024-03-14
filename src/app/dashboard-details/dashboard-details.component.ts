import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.scss'
})
export class DashboardDetailsComponent {
  constructor(private readonly router: Router) {}

  onClick() {
    this.router.navigate(['/dashboads']);
  }
}
