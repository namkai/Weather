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
						<span className="icon icon-drop sidebar-brand-icon"/>
					</a>
				</div>

				<div className="collapse nav-toggleable-md" id="nav-toggleable-md">
					<SearchBar/>
					<ul className="nav nav-pills nav-stacked flex-column">
						<li className="nav-header">Dashboards</li>
						<li className="nav-item">
							<a className="nav-link active" href="index.html">Overview</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="order-history/index.html">Order history</a>
						</li>
						<li className="nav-item">
							<a className="nav-link "href="fluid/index.html">Fluid layout</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="icon-nav/index.html">Icon nav</a>
						</li>

						<li className="nav-header">More</li>
						<li className="nav-item">
							<a className="nav-link "href="docs/index.html">
								Toolkit docs
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="http://getbootstrap.com" target="blank">
								Bootstrap docs
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="index-light/index.html">Light UI</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#docsModal" data-toggle="modal">
								Example modal
							</a>
						</li>
					</ul>
					<hr className="visible-xs mt-3"/>
				</div>
			</nav>
		</div>
	);
};



export default connect()(Sidebar);