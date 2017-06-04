import PropTypes from 'prop-types';
import React from 'react';
import City from './City';

const Cities = ({ storedCities, fetchWeather }) => {
	const cityList = storedCities.map(city => <City {...city} fetchWeather={fetchWeather}/>);
	return (
		<ul className="nav nav-pills nav-stacked flex-column">
			<li className="nav-header">Recent Cities</li>
			{cityList}
		</ul>
	);
};

Cities.defaultProps = {
	storedCities: [],
	fetchWeather: PropTypes.func,
};

Cities.propTypes = {
	storedCities: PropTypes.arrayOf(PropTypes.object),
	fetchWeather: PropTypes.func,
};

export default Cities;