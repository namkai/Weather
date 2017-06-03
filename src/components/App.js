import React from 'react';
import '../style/App.css';
import SearchBar from '../containers/SearchBar';
import Weather from '../containers/Weather';

export const App = () => (
  <div className="container">
    <SearchBar />
	  <Weather/>
  </div>
);

export default App;
