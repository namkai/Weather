import { createSelector } from 'reselect';

const selectedForecastTemp = state => state.forecast.filter(temp => temp.date.includes('12:00:00')).map(weather => weather.temp);

const selectedDates = state => state.forecast.filter(temp => temp.date.includes('12:00:00')).map(weather => weather.date.split(' ')[0]);

const generateDays = (dates, temp) => [dates, temp];

export default createSelector(
	selectedForecastTemp,
	selectedDates,
	generateDays,
);