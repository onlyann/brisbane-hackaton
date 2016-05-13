import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2HackatonAppComponent } from '../app/ng2-hackaton.component';

beforeEachProviders(() => [Ng2HackatonAppComponent]);

describe('App: Ng2Hackaton', () => {
  it('should create the app',
      inject([Ng2HackatonAppComponent], (app: Ng2HackatonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-hackaton works!\'',
      inject([Ng2HackatonAppComponent], (app: Ng2HackatonAppComponent) => {
    expect(app.title).toEqual('ng2-hackaton works!');
  }));
});
