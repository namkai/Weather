import expect from 'expect';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { fetchWeather } from '../actions';
import { FETCH_CURRENT_WEATHER_SUCCESS, FETCH_WEATHER } from '../constants/actionTypes';
import currentWeatherEpic from './currentWeatherEpic';

const epicMiddleware = createEpicMiddleware(currentWeatherEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('fetch weather epic', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });
  
  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(currentWeatherEpic);
  });
  
  it('fetches Weather Data', () => {
    store.dispatch(fetchWeather('San Francisco'));
    const responsePayload = [{
      date: '2017-08-03 21:00:00',
      temp: 79.41199999999998,
    }];
    nock('http://example.com/')
      .get('/api/users/123')
      .reply(200, responsePayload);
    expect(store.getActions()).toEqual([
      { type: FETCH_WEATHER, payload: 'San Francisco' },
      { type: FETCH_CURRENT_WEATHER_SUCCESS, responsePayload },
    ]);
  });
});