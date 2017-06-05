import PropTypes from 'prop-types';
import React, { Component } from 'react';
import City from './City';

class Cities extends Component {
	componentWillMount() {
		let cities = localStorage.getItem('storedCities');
		if (cities !== null && cities !== '') {
			cities = cities.split('&');
			this.props.updateStoredCities(cities);
		}
	}

	componentDidUpdate() {
		const stringCities = this.props.storedCities.join('&');
		localStorage.setItem('storedCities', stringCities);
	}

	cityList = () => this.props.storedCities.map((city, idx) => <City name={city} key={idx} fetchWeather={this.props.fetchWeather}/>);
	render() {
		return (
			<ul className="nav nav-pills nav-stacked flex-column">
				<li className="nav-header">Recent Cities <small>· <a href="#" onClick={this.props.clearStoredCities}>Clear</a></small></li>
				{this.cityList()}
			</ul>
		);
	}
};

Cities.defaultProps = {
	storedCities: [],
	fetchWeather: PropTypes.func,
};

Cities.propTypes = {
	storedCities: PropTypes.arrayOf(PropTypes.string),
	fetchWeather: PropTypes.func,
};

export default Cities;