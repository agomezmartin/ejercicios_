import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  cities: City[];
  selectedCity: City = "";

  constructor() { }

  ngOnInit(): void {

    this.cities = [
      {name: 'Londres', code: 'LN'},
      {name: 'Madrid', code: 'MD'},
      {name: 'Ibiza', code: 'IB'},
      {name: 'Barcelona', code: 'BC'},
    ];
  }

}
