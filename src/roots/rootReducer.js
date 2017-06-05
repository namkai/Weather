import { combineReducers } from 'redux';
import storedCities from '../reducers/stored_cities_reducer';
import createStatusReducer from '../reducers/HOR/createStatusReducer';

const weather = createStatusReducer('current_weather');
const forecast = createStatusReducer('forecast_weather')

const rootReducer = combineReducers({ weather, forecast, storedCities });

export default rootReducer;
