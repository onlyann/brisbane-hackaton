import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {Devtools} from '@ngrx/devtools';
import {WeatherServiceService} from './weather-service.service';
import {CityWeather} from './shared/index';
import {CityFormComponent} from './city-form/city-form.component';
import {CityListComponent} from './city-list/city-list.component';



@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'my-app.component.html',
    directives: [Devtools, CityFormComponent, CityListComponent],
    providers: [WeatherServiceService]
})

export class MyApp implements OnInit {
    cities$: Observable<CityWeather[]>;
    
    constructor(private _service: WeatherServiceService){
    }
    
    ngOnInit() {
        this._service.requestWeather();
        this.cities$ = this._service.cities$;
    }
    
    onDelete(cityWeather: CityWeather) {
        this._service.deleteCity(cityWeather.City);
    }
    
    onRefresh() {
        this._service.requestWeather();
    }
    
    onAdd(city: CityWeather) {
        this._service.addCity(city);
    }
    
    // increment(){
    //     this.store.dispatch({ type: INCREMENT });
    // }
    // decrement(){
    //     this.store.dispatch({ type: DECREMENT });
    // }
    // reset(){
    //     this.store.dispatch({ type: RESET });
    // }
}
