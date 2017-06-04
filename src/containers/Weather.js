import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import WeatherHeader from '../components/WeatherHeader';

export const Weather = ({ weather }) => {
	return (
  <div className="col-md-9 content">
    <WeatherHeader city={weather.name} description={weather.weather} />
    <hr className="mt-3" />
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
