import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import json from './dashboards.json';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
   navItems: any;

   constructor(private httpClient: HttpClient) { }

    ngOnInit() {
      
    }

   

}
