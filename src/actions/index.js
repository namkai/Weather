import * as type from '../constants/actionTypes';

// Get weather data from openweather api
export const fetchWeather = payload => ({ type: type.FETCH_WEATHER, payload });

// Cancel fetchWeather promise in fetchWeatherEpic
export const abortWeather = () => ({ type: type.FETCH_WEATHER_ABORTED });

// Clears existing weather data in redux store
export const clearWeather = () => ({ type: type.WEATHER_CLEAR });
