import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Dashboards } from '../types/responses/Dashboards';
@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent implements OnInit {
  @Input()
  dashboard!: Dashboards;
  @Input() parentId: string = '';
  @Input() color: string = '';
  @Input() bgcolor: string = '';
  @Input() faIcon: string = '';

  constructor(private readonly router: Router) {}
  ngOnInit(): void {
    console.log('Dashbaord', this.dashboard);
  }

  openDashboardDetails() {
    const detailsURL = `/dashboards-details/${this.parentId}/${this.dashboard.childId}`;
    console.log('detailsURL', detailsURL, this.dashboard);
    this.router.navigate([detailsURL], {
      state: this.dashboard
    });
  }
}
