import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashbaord-card',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dashbaord-card.component.html',
  styleUrl: './dashbaord-card.component.scss'
})
export class DashbaordCardComponent {
  constructor(private readonly router: Router) {}
  @Input() dashboard;
  onClick() {
    this.router.navigate(['/dashboad-details']);
  }
}
