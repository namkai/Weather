import * as type from '../constants/actionTypes';

// Get weather data from openweather api
export const fetchWeather = payload => ({ type: type.FETCH_WEATHER, payload });

// Cancel fetchWeather promise in currentWeatherEpic
export const abortWeather = () => ({ type: type.FETCH_CURRENT_WEATHER_ABORTED });

// Clears existing weather data in redux store
export const clearWeather = () => ({ type: type.WEATHER_CLEAR });

// Updates the users weather query
export const updateQuery = payload => ({ type: type.UPDATE_QUERY, payload });
