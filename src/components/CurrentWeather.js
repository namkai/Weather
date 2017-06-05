import PropTypes from 'prop-types';
import React from 'react';
import '../style/Loader.css';

import CurrentWeatherData from './CurrentWeatherData';
import Map from './GoogleMap';

const CurrentWeather = (props) => {
	if (props.coord === undefined) {
		return (
			<div />
		);
	}
	if (props.status === 'pending') {
		return <div className="loader"/>;
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
