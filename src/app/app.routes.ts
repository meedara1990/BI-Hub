import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';

export const routes: Routes = [
  {
    path: '',
    title: 'BI',
    component: MainDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboards/:id',
    title: 'BI',
    component: DashboardsComponent
  },
  {
    path: 'dashboards-details/:id/:childId',
    title: 'BI',
    component: DashboardDetailsComponent
  },
  {
    path: 'dashboards-search',
    title: 'BI',
    component: DashboardSearchComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
