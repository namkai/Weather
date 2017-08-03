import PropTypes from 'prop-types';
import React from 'react';
import CitiesLayout from './layout';
import City from '../City';

const Cities = ({ storedCities, fetchWeather, clearStoredCities }) => {
  let view = null;
  if (storedCities.length > 0) {
    view = storedCities.map((city, idx) => <City name={city} key={idx} fetchWeather={fetchWeather} />);
  }
  return <CitiesLayout clearStoredCities={clearStoredCities}>{ view }</CitiesLayout>;
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
