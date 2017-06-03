import { combineReducers } from 'redux';
import input from '../reducers/input_reducer';
import createStatusReducer from '../reducers/HOR/createStatusReducer';

const weather = createStatusReducer('current_weather');
const forecast = createStatusReducer('forecast_weather')

const rootReducer = combineReducers({ weather, forecast, input });

export default rootReducer;
