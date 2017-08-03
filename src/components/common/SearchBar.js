import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		};
	}

	updateQuery = (query) => {
		this.setState(() => ({ query }));
	};
	searchForWeather = (e) => {
		e.preventDefault();
		this.props.fetchWeather(this.state.query);
		this.setState(() => ({ query: '' }));
	};

	render() {
		return (
			<form onSubmit={this.searchForWeather} className="sidebar-form">
				<input
					placeholder="Search for a City"
					className="form-control"
					value={this.state.query}
					onChange={e => this.updateQuery(e.target.value)}
				/>
				<button type="submit" className="btn-link">
					<span className="icon icon-magnifying-glass"/>
				</button>
			</form>
		);
	}
}
;

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

