import PropTypes from 'prop-types';
import React from 'react';

const SearchBar = ({ input, updateQuery, fetchWeather }) => {
	const searchForWeather = (e) => {
		e.preventDefault();
		fetchWeather(input);
	};
	return (
  <form onSubmit={searchForWeather} className="sidebar-form">
    <input
      placeholder="Search for a City"
      className="form-control"
      value={input}
      onChange={e => updateQuery(e.target.value)}
    />
    <button type="submit" className="btn-link">
      <span className="icon icon-magnifying-glass" />
    </button>
  </form>
	);
};

SearchBar.defaultProps = {
	input: '',
	updateQuery: PropTypes.func,
	fetchWeather: PropTypes.func,
};

SearchBar.propTypes = {
	input: PropTypes.string,
	updateQuery: PropTypes.func,
	fetchWeather: PropTypes.func,
};

export default SearchBar;
