import { Component, OnInit, Input } from '@angular/core';
import { CityWeather } from '../shared/index';
import {CityWeatherItemComponent} from '../city-weather-item/city-weather-item.component';

@Component({
  moduleId: module.id,
  selector: 'city-list',
  templateUrl: 'city-list.component.html',
  styleUrls: ['city-list.component.css'],
  directives: [CityWeatherItemComponent]
})
export class CityListComponent implements OnInit {

  @Input()
  cities: CityWeather[];

  constructor() {}

  ngOnInit() {
  }

}
