import { combineEpics } from 'redux-observable';
import currentWeatherEpic from '../epics/currentWeatherEpic';
import forecastWeatherEpic from '../epics/forecastWeatherEpic';

const rootEpic = combineEpics(currentWeatherEpic, forecastWeatherEpic);


export default rootEpic;
