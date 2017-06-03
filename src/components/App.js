import React from 'react';
import '../style/App.css';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/Weather';

export const App = () => (
  <div className="container">
    <SearchBar />
	  <WeatherList/>
  </div>
);

export default App;
