import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const Sidebar = (props) => {
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
					<ul className="nav nav-pills nav-stacked flex-column">
						<li className="nav-header">Recent Cities</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Overview</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#">Order history</a>
						</li>
						<li className="nav-item">
							<a className="nav-link "href="#">Fluid layout</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#">Icon nav</a>
						</li>
					</ul>
					<hr className="visible-xs mt-3"/>
				</div>
			</nav>
		</div>
	);
};



export default connect()(Sidebar);