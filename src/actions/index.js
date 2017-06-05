import * as type from '../constants/actionTypes';

// Get weather data from openweather api
export const fetchWeather = payload => ({ type: type.FETCH_WEATHER, payload });

// Cancel fetchWeather promise in currentWeatherEpic
export const abortWeather = () => ({ type: type.FETCH_CURRENT_WEATHER_ABORTED });

// Clears existing weather data in redux store
export const clearWeather = () => ({ type: type.WEATHER_CLEAR });

// Clears the stored cities reducer as well as local storage
export const clearStoredCities = () => ({ type: type.CLEAR_STORED_CITIES });

// Grabs recent searches stored in local storage and updates the storedReducer
export const updateStoredCities = response => ({ type: type.UPDATE_STORED_CITIES, response });
