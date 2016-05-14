import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup } from '@angular/common';
import { CityWeather } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'city-form',
  templateUrl: 'city-form.component.html'
})
export class CityFormComponent implements OnInit {
  private city: CityWeather;

  @Output()
  add = new EventEmitter<CityWeather>();

  constructor() {
    this.city = {
      City : "",
      Temperature: 0,
      Humidity: 0,
      Latitude: 0,
      Longitude: 0
    };
  }

  ngOnInit() {
  }
}
