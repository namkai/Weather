import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Cities from '../components/Cities';

const Sidebar = ({ storedCities }) => {
	console.log(storedCities, `i'm the stored cities!`)
	return (
		<div className="col-md-3 sidebar">
			<nav className="sidebar-nav">
				<div className="sidebar-header">
					<button className="nav-toggler nav-toggler-md sidebar-toggler" type="button" data-toggle="collapse" data-target="#nav-toggleable-md">
						<span className="sr-only">Toggle nav</span>
					</button>
					<a className="sidebar-brand img-responsive" href="index.html">
						<span style={{color: '#1ec8ff'}} className="icon icon-drop sidebar-brand-icon"/>
					</a>
				</div>

				<div className="collapse nav-toggleable-md" id="nav-toggleable-md">
					<SearchBar/>
					<Cities storedCities={storedCities} />
					<hr className="visible-xs mt-3"/>
				</div>
			</nav>
		</div>
	);
};

export default connect(({ storedCities }) => ({ storedCities }))(Sidebar);