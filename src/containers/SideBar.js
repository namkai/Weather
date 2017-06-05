import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Cities from '../components/Cities';
import SearchBar from '../components/SearchBar';
import citySelector from '../selectors/selected_stored_cities';

export const SideBar = ({ storedCities, fetchWeather, updateQuery, input, updateStoredCities, clearStoredCities }) => (
  <div className="col-md-3 sidebar">
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        <button
          className="nav-toggler nav-toggler-md sidebar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-toggleable-md"
        ><span className="sr-only">Toggle nav</span>
        </button>
        <a className="sidebar-brand img-responsive" href="#">
          <span style={{ color: '#1ec8ff' }} className="icon icon-drop sidebar-brand-icon" />
        </a>
      </div>

      <div className="collapse nav-toggleable-md" id="nav-toggleable-md">
        <SearchBar fetchWeather={fetchWeather} />
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
};

SideBar.propTypes = {
	storedCities: PropTypes.arrayOf(PropTypes.string, PropTypes.object),
	fetchWeather: PropTypes.func,
};

const mapStateToProps = state => ({ storedCities: citySelector(state)});

export default connect(mapStateToProps, actions)(SideBar);
