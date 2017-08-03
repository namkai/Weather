import expect from 'expect';
import * as types from '../constants/actionTypes';
import * as actions from './index';


describe('actions', () => {
  //  Fetch Weather action test
  it('should create an action to fetch weather with San Francisco as the desired city', () => {
    const payload = 'San Francisco';
    const expectedAction = {
      type: types.FETCH_WEATHER,
      payload,
    };
    expect(actions.fetchWeather(payload)).toEqual(expectedAction);
  });
  it('should create an Abort Weather action object', () => {
    const expectedAction = { type: types.FETCH_CURRENT_WEATHER_ABORTED };
    expect(actions.abortWeather()).toEqual(expectedAction);
  });
  it('should create a clear stored cities action to remove local storage', () => {
    const expectedAction = { type: types.CLEAR_STORED_CITIES };
    expect(actions.clearStoredCities()).toEqual(expectedAction);
  });
  it('should create an action that updates stored cities in local storage', () => {
    const response = 'San Francisco';
    const expectedAction = {
      type: types.UPDATE_STORED_CITIES,
      response,
    };
    expect(actions.updateStoredCities(response)).toEqual(expectedAction);
  });
});
