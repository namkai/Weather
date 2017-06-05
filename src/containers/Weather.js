import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import WeatherHeader from '../components/WeatherHeader';
import Forecast from './Forecast';

export const Weather = ({ weather, forecast }) => {
	console.log(weather, 'i\'m the weather');
	console.log(forecast, 'i\'m the forecast!');
	return (
		<div className="col-md-9 content">
			<WeatherHeader city={weather.name} description={weather.weather}/>
			<hr className="mt-3"/>
			<CurrentWeather {...weather} />
			<Forecast forecast={forecast}/>
		</div>
	);
};

Weather.defaultProps = {
	weather: {},
	forecast: {
		list: [],
	},
};

Weather.propTypes = {
	weather: PropTypes.object,
};


export default connect(({ weather }) => ({ weather }))(Weather);
