import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';

export const Weather = ({ weather }) => {
	console.log(weather, `i'm the weather!`)
	return (
		<div>
			<CurrentWeather {...weather} />
		</div>
	);
};

Weather.defaultProps = {
	weather: {},
};

Weather.propTypes = {
	weather: PropTypes.object,
};

export default connect(({ weather, forecast }) => ({ weather, forecast }))(Weather);