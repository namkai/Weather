import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import citySelector from '../../selectors/selected_stored_cities';
import Cities from '../common/Cities/index';
import SearchBar from '../common/SearchBar';
import SideBarLayout from '../layouts/SideBarLayout';


export const SideBar = ({ storedCities, fetchWeather, updateStoredCities, clearStoredCities }) => (
  <SideBarLayout searchBar={<SearchBar fetchWeather={fetchWeather}/>}>
    <Cities
      storedCities={storedCities}
      fetchWeather={fetchWeather}
      updateStoredCities={updateStoredCities}
      clearStoredCities={clearStoredCities} />
  </SideBarLayout>
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

export default connect(state => ({ storedCities: citySelector(state) }), actions)(SideBar);
