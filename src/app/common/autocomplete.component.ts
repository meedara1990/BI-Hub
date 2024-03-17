import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  imports: [CommonModule, AutocompleteLibModule]
})
export class AutoCompleteComponent implements OnInit {
  keyword = 'name';

  data = [
    {
      id: 1,
      name: 'Dakota Gaylord PhD',
      address: '14554 Smith Mews'
    },
    {
      id: 2,
      name: 'Maria Legros',
      address: '002 Pagac Drives'
    },
    {
      id: 3,
      name: 'Brandyn Fritsch',
      address: '8542 Lowe Mountain'
    },
    {
      id: 4,
      name: 'Glenna Ward V',
      address: '1260 Oda Summit'
    },
    {
      id: 5,
      name: 'Jamie Veum',
      address: '5017 Lowe Route'
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log('init');
  }

  selectEvent(item) {
    console.log('item', item);
  }

  onChangeSearch(val: string) {
    console.log('val', val);
  }

  onFocused(e) {
    console.log('e', e);
  }
}
