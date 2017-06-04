import PropTypes from 'prop-types';
import React from 'react';

const WeatherHeader = ({ city, description = 'Get Your weather' }) => (
	<div className="dashhead">
		<div className="dashhead-titles">
			<h2 className="dashhead-title">{city}</h2>
			<h6 className="dashhead-subtitle">{description[0].description}</h6>
		</div>

		<div className="btn-toolbar dashhead-toolbar">
			<div className="btn-toolbar-item input-with-icon">
				<input readOnly type="text" value={new Date()} className="form-control" data-provide="datepicker"/>
				<span className="icon icon-calendar"/>
			</div>
		</div>
	</div>
);

WeatherHeader.defaultProps = {
	city: 'Weather',
	description: 'Get the weather in any city',
};

WeatherHeader.propTypes = {
	city: PropTypes.string,
	description: PropTypes.arrayOf(PropTypes.object),
};

export default WeatherHeader;
