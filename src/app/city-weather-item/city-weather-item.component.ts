import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityWeather } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'city-weather-item',
  templateUrl: 'city-weather-item.component.html',
  styleUrls: ['city-weather-item.component.css']
})
export class CityWeatherItemComponent implements OnInit {

  constructor() {}
  
  @Input()
  item: CityWeather;
  
  @Output()
  delete = new EventEmitter<CityWeather>();

  ngOnInit() {
  }

}
