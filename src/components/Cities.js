import PropTypes from 'prop-types';
import React, { Component } from 'react';
import City from './City';

class Cities extends Component {
	componentWillMount() {
		let cities = localStorage.getItem('storedCities');
		console.log(cities, `i'm the cities!`)
		if (cities !== null && cities !== '') {
			cities = cities.split('&');
			console.log(cities, `i'm the cities!`)
			this.props.updateStoredCities(cities);
		}
	}

	componentDidUpdate() {
		const stringCities = this.props.storedCities.join('&');
		localStorage.setItem('storedCities', stringCities);
	}

	cityList = () => this.props.storedCities.map(city => <City name={city} fetchWeather={this.props.fetchWeather}/>);
	render() {
		console.log(`i'm the storedCities after the reducers!`, this.props.storedCity)
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
	storedCities: PropTypes.arrayOf(PropTypes.object),
	fetchWeather: PropTypes.func,
};

export default Cities;