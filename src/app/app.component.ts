import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NgbDropdownModule,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'bi-hub';
  active = 1;
}
