import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {Http, Headers, RequestOptions} from '@angular/http';
import { AppState, CityWeather, WEATHER_LIST_REQUEST_SUCCESS, WEATHER_DELETE_CITY_REQUEST_SUCCESS, WEATHER_ADD_CITY_REQUEST_SUCCESS } from './shared/index';

const baseUrl = "http://hackdayapi.azurewebsites.net/api/weather";

@Injectable()
export class WeatherServiceService {


  constructor(public store: Store<AppState>, private _http: Http ) {
  }
  
  requestWeather() {
    this._http.get(`${baseUrl}`)
      .map(r => <CityWeather[]> r.json())
      .do(list => {
          this.store.dispatch({ type: WEATHER_LIST_REQUEST_SUCCESS, payload: list });
      })
      .subscribe();
  }
  
  deleteCity(city: string)  {
    this._http.delete(`${baseUrl}/city/${city}`)
      .do(() => this.store.dispatch({ type: WEATHER_DELETE_CITY_REQUEST_SUCCESS, payload: city }))
      .subscribe();
  }
  
  addCity(city: CityWeather)  {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    
    this._http.post(`${baseUrl}`, JSON.stringify(city), options)
      .do((cityResp) => this.store.dispatch({ type: WEATHER_ADD_CITY_REQUEST_SUCCESS, payload: city }))
      .subscribe();
  }
  
  
  get cities$() {
    return this.store.select(x => x.cities);
  }
}
