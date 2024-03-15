import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteComponent } from '../common/autocomplete.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule, AutoCompleteComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}
  isCollapsed = false;
  onClick() {
    this.router.navigate(['/']);
  }
}
