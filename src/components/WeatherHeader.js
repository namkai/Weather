import React from 'react';
import PropTypes from 'prop-types';

const WeatherHeader = ({ city, description='Get Your weather' }) => (
	<div className="dashhead">
		<div className="dashhead-titles">
			<h2 className="dashhead-title">{city}</h2>
			<h6 className="dashhead-subtitle">{description[0].description}</h6>
		</div>

		<div className="btn-toolbar dashhead-toolbar">
			<div className="btn-toolbar-item input-with-icon">
				<input type="text" value="01/01/15 - 01/08/15" className="form-control" data-provide="datepicker"/>
				<span className="icon icon-calendar"/>
			</div>
		</div>
	</div>
);

WeatherHeader.defaultProps = {
	city: 'Weather',
	description: 'Get the weather in any city'
};

export default WeatherHeader;
