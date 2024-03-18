import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Main Dashboard',
    component: MainDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboards/:id',
    title: 'Dashboards',
    component: DashboardsComponent
  },
  {
    path: 'dashboard-details/:id',
    title: 'DashboardDetails',
    component: DashboardDetailsComponent
  },
  {
    path: 'dashboards-search',
    title: 'DashboardSearch',
    component: DashboardSearchComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
