import PropTypes from 'prop-types';
import React from 'react';

import CurrentWeatherData from './CurrentWeatherData';
import Map from './Map';

const CurrentWeather = (props) => {
	if (props.coord === undefined) {
		return (
  <div />
		);
	}
	if (props.status === 'pending') {
		return <div className="loader" />;
	}
	return (
  <div className="row">
    <CurrentWeatherData {...props} />
    <Map {...props.coord} />
  </div>
	);
};

CurrentWeather.propTypes = {
	coord: PropTypes.objectOf(PropTypes.object),
};

export default CurrentWeather;
