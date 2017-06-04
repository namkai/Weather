import React from 'react';
import SideBar from '../containers/SideBar';
import Weather from '../containers/Weather';
import '../style/App.css';

export const App = () => (
	<div className="container">
		<div className="row">
			<SideBar/>
			<Weather/>
		</div>
	</div>
);

export default App;
