import PropTypes from 'prop-types';
import React from 'react';
import { Gmaps } from 'react-gmaps';

const Map = ({ lat, lon }) => (
  <div className="col-md-6">
    <Gmaps
      width={'100%'}
      height={'350px'}
      lat={lat}
      lng={lon}
      zoom={12}
    >
    </Gmaps>
  </div>
);

Map.defaultProps = {
	lat: 1,
	lon: 2,
};

Map.propTypes = {
	lat: PropTypes.number,
	lon: PropTypes.number,
};
export default Map;
