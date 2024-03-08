import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashbaord-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbaord-card.component.html',
  styleUrl: './dashbaord-card.component.scss'
})
export class DashbaordCardComponent {
  @Input() dashboard;
}
