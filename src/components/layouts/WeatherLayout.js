import React from 'react';

const WeatherLayout = ({ children, header }) => (
  <div className="col-md-9 content">
    {header}
    <hr className="mt-3"/>
    {children}
  </div>
);

export default WeatherLayout;
