import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Cities from '../components/Cities';
import SearchBar from '../components/SearchBar';
import citySelector from '../selectors/selected_stored_cities';

export const SideBar = ({ storedCities, fetchWeather, updateStoredCities, clearStoredCities }) => (
  <div className="col-md-3 sidebar">
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        <a className="sidebar-brand img-responsive" href="#">
          <span style={{ color: '#1ec8ff' }} className="icon icon-drop sidebar-brand-icon" />
        </a>
      </div>
	    <SearchBar fetchWeather={fetchWeather} />
      <div className="collapse nav-toggleable-md" id="nav-toggleable-md">
        <Cities
          storedCities={storedCities}
          fetchWeather={fetchWeather}
          updateStoredCities={updateStoredCities}
          clearStoredCities={clearStoredCities}
        />
        <hr className="visible-xs mt-3" />

      </div>
    </nav>
  </div>
);

SideBar.defaultProps = {
	storedCities: PropTypes.arrayOf(PropTypes.string, PropTypes.object),
	fetchWeather: PropTypes.func,
	updateStoredCities: PropTypes.func,
	clearStoredCities: PropTypes.func,
};

SideBar.propTypes = {
	storedCities: PropTypes.arrayOf(PropTypes.string, PropTypes.object),
	fetchWeather: PropTypes.func,
	updateStoredCities: PropTypes.func,
	clearStoredCities: PropTypes.func,
};

const mapStateToProps = state => ({ storedCities: citySelector(state) });

export default connect(mapStateToProps, actions)(SideBar);
