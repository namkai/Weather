import { combineEpics } from 'redux-observable';
import fetchWeatherEpic from '../epics/fetchWeatherEpic';

const rootEpic = combineEpics(fetchWeatherEpic);


export default rootEpic;
