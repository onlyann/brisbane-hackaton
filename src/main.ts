import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MyApp, environment } from './app/';
import {instrumentStore} from '@ngrx/devtools';
import {provideStore} from '@ngrx/store';
import { cities } from './app/shared/reducers';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(MyApp, [provideStore({cities}), instrumentStore(), HTTP_PROVIDERS]);
