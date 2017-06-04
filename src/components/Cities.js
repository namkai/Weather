import React from 'react';
import City from './City';

const Cities = ({ storedCities }) => {
	const cityList = storedCities.map(city => <City {...city} />);
	return (
		<ul className="nav nav-pills nav-stacked flex-column">
			<li className="nav-header">Recent Cities</li>
			{cityList}
		</ul>
	);
};

export default Cities;