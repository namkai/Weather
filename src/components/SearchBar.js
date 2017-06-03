import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, updateQuery } from '../actions';

export const SearchBar = ({ input, updateQuery, fetchWeather }) => (
  <div className="row">
    <div className="col-lg-6">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={e => updateQuery(e.target.value)}
          placeholder="Search for..."
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            onClick={() => fetchWeather(input)}
            type="button"
          >Get Weather!
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default connect(({ input }) => ({ input }), { updateQuery, fetchWeather })(SearchBar);
