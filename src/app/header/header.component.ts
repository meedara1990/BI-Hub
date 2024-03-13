import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isOpened: boolean = false;

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
