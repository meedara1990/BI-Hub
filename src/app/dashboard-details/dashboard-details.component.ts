import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Dashboards } from '../types/responses/Dashboards';
import { SanitizePipe } from '../shared/sanitize.pipe';
import { DashboardService } from '../shared/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
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
  displayIframe: boolean = true;
  isTableauProdUrl: boolean = false;

  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.dashboard = history.state;
    this.isTableauProdUrl = this.dashboard.url.includes(
      'tableau-prod.nmgcloud.io'
    );
    this.dashboardService.checkAccess(this.dashboard.url).subscribe(
      (response: any) => {
        // this.displayIframe = true;
        console.log('Access Response', response);
      },
      (error: HttpErrorResponse) => {
        console.log('Access Error', error);
        // if (error.status === 401) {
        //   this.redirectFOrAUthentication();
        // }
      }
    );
  }
}
