import { combineReducers } from 'redux';
import weather from '../reducers/weather_reducer';
import input from '../reducers/input_reducer';

const rootReducer = combineReducers({ weather, input });

export default rootReducer;
