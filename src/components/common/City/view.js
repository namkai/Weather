import PropTypes from 'prop-types';
import React from 'react';

const City = ({ name, fetchWeather }) => (
  <li className="nav-item">
    <a className="nav-link" onClick={() => fetchWeather(name)} href="#">{name}</a>
  </li>
);

City.propTypes = {
  name: PropTypes.string,
  fetchWeather: PropTypes.func,
};

export default City;
