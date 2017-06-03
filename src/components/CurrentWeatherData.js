import PropTypes from 'prop-types';
import React from 'react';

const CurrentWeatherData = ({ main, name, weather, wind, sys }) => (
  <div className="col-md-7">
    <div className="row">
      <div className="col-md-6">
        <h2>{name}</h2>
        <hr />
        <h4>Current conditions</h4>
        <ul>
          <li>Temp: {Math.floor(main.temp * 9 / 5 - 459.67)}</li>
          <li>Humidity: {main.humidity}%</li>
          <li>Pressure: {main.pressure}</li>
          <li>Wind Speed: {wind.speed} mph</li>
          <li>Today the weather is mostly {weather[0].description}.</li>
          <li>Sunrise is at: {sys.sunrise}</li>
          <li>Sunset is at: {sys.sunset}</li>
        </ul>
      </div>
    </div>
  </div>
);

CurrentWeatherData.defaultProps = {
	main: {
		temp: PropTypes.number,
		humidity: PropTypes.string,
		pressure: PropTypes.string,
	},
	name: PropTypes.string,
	wind: PropTypes.object,
	weather: PropTypes.array,
};

CurrentWeatherData.propTypes = {
	main: PropTypes.object,
	name: PropTypes.string,
	weather: PropTypes.array,
	wind: PropTypes.object,
	sys: PropTypes.object,
};

export default CurrentWeatherData;
