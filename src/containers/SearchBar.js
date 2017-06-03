import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export const SearchBar = ({ input, updateQuery, fetchWeather }) => {
	const searchForWeather = (e) => {
		e.preventDefault();
		fetchWeather(input);
	};
	return (
    <form onSubmit={searchForWeather} className="input-group">
      <input
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        value={input}
        onChange={e => updateQuery(e.target.value)}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
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

export default connect(({ input }) => ({ input }), actions)(SearchBar);
