import PropTypes from 'prop-types';
import React from 'react';
import City from '../City/view';

const Cities = ({ storedCities, fetchWeather, clearStoredCities }) => {
  let view = null;
  if (storedCities.length > 0) {
    view = storedCities.map((city, idx) => <City name={city} key={idx} fetchWeather={fetchWeather} />);
  }
  return (
    <ul className="nav nav-pills nav-stacked flex-column">
      <li className="nav-header">Recent Cities
        <small> · <a href="#" onClick={clearStoredCities}>Clear</a></small>
      </li>
      {view}
    </ul>
  );
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
