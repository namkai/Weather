import React from 'react';

const CitiesLayout = ({ children, clearStoredCities }) => (
  <ul className="nav nav-pills nav-stacked flex-column">
    <li className="nav-header">Recent Cities
      <small> · <a href="#" onClick={clearStoredCities}>Clear</a></small>
    </li>
    {children}
  </ul>
);

export default CitiesLayout;
