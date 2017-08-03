import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../../common/CurrentWeather/index';
import WeatherHeader from '../../common/WeatherHeader/view';
import Chart from '../../common/Chart/index';
import WeatherLayout from '../../layouts/WeatherLayout';

export const Weather = ({ weather, forecast }) => (
  <WeatherLayout header={<WeatherHeader city={weather.name} description={weather.weather} />} >
    <CurrentWeather {...weather} />
    <Chart forecast={forecast} />
  </WeatherLayout>
);

Weather.defaultProps = {
  weather: {},
  forecast: {
    list: [],
  },
};

Weather.propTypes = {
  weather: PropTypes.object,
  forecast: PropTypes.arrayOf(PropTypes.array),
};

export default Weather;
