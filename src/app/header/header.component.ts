import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}
  isCollapsed = false;
  onClick() {
    this.router.navigate(['/']);
  }
}
