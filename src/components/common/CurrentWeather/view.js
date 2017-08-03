import PropTypes from 'prop-types';
import React from 'react';

import CurrentWeatherData from '../CurrentWeatherData';
import Map from '../Map/view';

const CurrentWeather = ({ coord, main, wind, sys }) => {
  let view = null;
  if (coord !== undefined) {
    view = (
      <div className="row">
        <CurrentWeatherData main={main} wind={wind} sys={sys} />
        <Map {...coord} />
      </div>
    );
  }
  return view;
};

CurrentWeather.propTypes = {
  coord: PropTypes.objectOf(PropTypes.number),
};

export default CurrentWeather;
