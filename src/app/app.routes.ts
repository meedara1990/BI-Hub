import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: MainDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboads/:id',
    title: 'Dashboards',
    component: DashboardsComponent
  },
  {
    path: 'dashboad-details/:id',
    title: 'DashBoardDetails',
    component: DashboardDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
