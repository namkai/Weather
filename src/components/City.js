import React from 'react';

const City = ({ name, fetchWeather }) => (
  <li className="nav-item">
    <a className="nav-link" onClick={() => fetchWeather(name)} href="#">{name}</a>
  </li>
);

export default City;
