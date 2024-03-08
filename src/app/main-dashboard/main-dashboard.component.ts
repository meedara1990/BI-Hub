import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChartLine);
  }
}
