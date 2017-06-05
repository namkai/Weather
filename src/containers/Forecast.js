import 'c3/c3.css';
import React from 'react';
import { connect } from 'react-redux';
import selectedForecast from '../selectors/selected_forecast';
import Chart from '../components/Chart';

const Forecast = ({ forecast }) => {
	console.log(forecast, 'i\'m the forecast');
	if (forecast.length === 0) {
		return (
			<div></div>
		);

	}
	const data = {
		columns: [
			['Temperature', ...forecast],
		],
		axis: {
			type: 'timeseries',
			tick: {
				format: '%Y-%m-%d',
			},
		},
		color: 'orange',
	};
	return (
		<Chart forecast={forecast} chartType={'bar'} />
	);
};

const mapStateToProps = (state) => ({ forecast: selectedForecast(state) });

export default connect(mapStateToProps)(Forecast);
