import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Dashboards } from '../types/responses/Dashboards';
import { SanitizePipe } from '../shared/sanitize.pipe';
import { DashboardService } from '../shared/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Location} from '@angular/common';
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

  constructor(private dashboardService: DashboardService, private _location: Location) {}
  ngOnInit(): void {
    this.dashboard = history.state;
    this.isTableauProdUrl = this.dashboard.url.includes(
      'tableau-prod.nmgcloud.io'
    );
    if (this.isTableauProdUrl) {
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
  backClick() {
    this._location.back();
  }
}
