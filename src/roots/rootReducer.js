import { combineReducers } from 'redux';
import weather from '../reducers/weather_reducer';

const rootReducer = combineReducers({ weather });

export default rootReducer;
