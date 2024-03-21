import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard-search',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-search.component.html',
  styleUrl: './dashboard-search.component.scss'
})
export class DashboardSearchComponent {
  constructor(private _location: Location) {}
  backClick() {
    this._location.back();
  }
}
