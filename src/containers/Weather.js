import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Weather = ({ weather }) => {
	const renderWeather = (cityData) => {

	};
	return (
		<div>Weather</div>
	);
};

//WeatherList.defaultProps = {
//	weather: [],
//};
//
//WeatherList.propTypes = {
//	weather: PropTypes.arrayOf(PropTypes.object),
//};

export default connect(({ weather }) => ({ weather }))(Weather);