import PropTypes from 'prop-types';
import React from 'react';
import '../style/CurrentWeatherData.css';

const CurrentWeatherData = ({ main, wind, sys }) => (
	<div className="col-md-6">
		<div className="jumbotron jumbotron-fluid" style={{ padding: '1.2rem 1.5rem', textAlign: 'center' }}>
			<div className="container">
				<h1 className="display-5">{Math.floor(main.temp * 9 / 5 - 459.67)} &deg;F</h1>
			</div>
		</div>
		<table className="table table-inverse">
			<tbody>
			<tr>
				<th scope="row">Humidity</th>
				<td>{main.humidity}%</td>
			</tr>
			<tr>
				<th scope="row">Pressure</th>
				<td>{main.pressure}</td>
			</tr>
			<tr>
				<th scope="row">Wind Speed</th>
				<td>{wind.speed} mph</td>
			</tr>
			<tr>
				<th scope="row">Sunrise</th>
				<td>{sys.sunrise}</td>
			</tr>
			<tr>
				<th scope="row">Sunset</th>
				<td>{sys.sunset}</td>
			</tr>
			</tbody>
		</table>
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
	sys: {
		sunrise: PropTypes.number,
		sunset: PropTypes.number,
	},
};

CurrentWeatherData.propTypes = {
	main: PropTypes.object,
	name: PropTypes.string,
	weather: PropTypes.array,
	wind: PropTypes.object,
	sys: PropTypes.object,
};

export default CurrentWeatherData;
