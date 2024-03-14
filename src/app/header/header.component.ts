import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}
  isCollapsed = false;
  onClick() {
    this.router.navigate(['/']);
  }
}
