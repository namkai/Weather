import PropTypes from 'prop-types';
import React from 'react';

const SearchBar = ({ query, updateQuery, onSearchForWeather }) => (
  <form onSubmit={onSearchForWeather} className="sidebar-form">
    <input
      placeholder="Search for a City"
      className="form-control"
      value={query}
      onChange={updateQuery}
    />
    <button type="submit" className="btn-link">
      <span className="icon icon-magnifying-glass" />
    </button>
  </form>
);

SearchBar.defaultProps = {
  query: '',
  updateQuery: PropTypes.func,
  onSearchForWeather: PropTypes.func,
};

SearchBar.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  onSearchForWeather: PropTypes.func,
};

export default SearchBar;

