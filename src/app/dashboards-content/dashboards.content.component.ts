import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboards-content',
  standalone: true,
  imports: [CommonModule, NgbNavModule],
  templateUrl: './dashboards.content.component.html',
  styleUrl: './dashboards.content.component.scss'
})
export class DashboardsContentComponent {
  active = 1;
}
