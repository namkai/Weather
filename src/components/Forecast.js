import 'c3/c3.css';
import PropTypes from 'prop-types';
import React from 'react';
import Chart from './Chart';

const Forecast = ({ forecast }) => (
  <Chart forecast={forecast} chartType={'bar'} />
);

Forecast.PropTypes = {
	forecast: PropTypes.arrayOf(PropTypes.array),
};

export default Forecast;
