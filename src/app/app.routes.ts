import { Routes } from '@angular/router';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: MainDashboardComponent,
    pathMatch: 'full'
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
