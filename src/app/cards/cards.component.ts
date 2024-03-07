import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import json from './dashboards.json';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  constructor(private httpClient: HttpClient) {}
}
