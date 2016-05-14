import {Reducer, Action} from '@ngrx/store';
import {CityWeather} from  './models';

export const WEATHER_LIST_REQUEST_SUCCESS = 'WEATHER_LIST_REQUEST_SUCCESS';
export const WEATHER_DELETE_CITY_REQUEST_SUCCESS = 'WEATHER_DELETE_CITY_REQUEST_SUCCESS';
export const WEATHER_ADD_CITY_REQUEST_SUCCESS = 'WEATHER_ADD_CITY_REQUEST_SUCCESS';

export const cities: Reducer<CityWeather[]> = (state: CityWeather[] = [], action: Action) => {
    switch (action.type) {
        case WEATHER_LIST_REQUEST_SUCCESS:
            return <CityWeather[]>action.payload;
        case WEATHER_DELETE_CITY_REQUEST_SUCCESS:
            return state.filter(x => x.City != action.payload);
        case WEATHER_ADD_CITY_REQUEST_SUCCESS:
            return [ Object.assign({}, action.payload), ...state];
        default:
            return state;
    }
}