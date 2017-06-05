import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import WeatherHeader from '../components/WeatherHeader';
import selectedForecast from '../selectors/selected_forecast';
import Forecast from '../components/Forecast';

export const Weather = ({ weather, forecast }) => (
  <div className="col-md-9 content">
    <WeatherHeader city={weather.name} description={weather.weather} />
    <hr className="mt-3" />
    <CurrentWeather {...weather} />
    <Forecast forecast={forecast} />
  </div>
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

const mapStateToProps = state => ({
	weather: state.weather,
	forecast: selectedForecast(state),
});


export default connect(mapStateToProps)(Weather);
