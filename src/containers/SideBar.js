import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Cities from '../components/Cities';
import SearchBar from '../components/SearchBar';

export const SideBar = ({ storedCities, fetchWeather, updateQuery, input }) => {
	return (
		<div className="col-md-3 sidebar">
			<nav className="sidebar-nav">
				<div className="sidebar-header">
					<button className="nav-toggler nav-toggler-md sidebar-toggler" type="button" data-toggle="collapse"
					        data-target="#nav-toggleable-md">
						<span className="sr-only">Toggle nav</span>
					</button>
					<a className="sidebar-brand img-responsive" href="#">
						<span style={{ color: '#1ec8ff' }} className="icon icon-drop sidebar-brand-icon"/>
					</a>
				</div>

				<div className="collapse nav-toggleable-md" id="nav-toggleable-md">
					<SearchBar updateQuery={updateQuery} fetchWeather={fetchWeather} input={input}/>
					<Cities storedCities={storedCities} fetchWeather={fetchWeather}/>
					<hr className="visible-xs mt-3"/>
				</div>
			</nav>
		</div>
	);
};

SideBar.defaultProps = {
	storedCities: PropTypes.arrayOf(PropTypes.object),
	fetchWeather: PropTypes.func,
	updateQuery: PropTypes.func,
	input: PropTypes.string,
};

SideBar.propTypes = {
	storedCities: PropTypes.arrayOf(PropTypes.object),
	fetchWeather: PropTypes.func,
	updateQuery: PropTypes.func,
	input: PropTypes.string,
};

export default connect(({ storedCities, input }) => ({ storedCities, input }), actions)(SideBar);