import PropTypes from 'prop-types';
import React from 'react';
import { GoogleMap, GoogleMapLoader } from 'react-google-maps';

const Map = ({ lat, lng }) => (
  <GoogleMapLoader
    containerElement={<div style={{ height: '100%' }} />}
    googleMapElement={
      <GoogleMap defaultZoom={12} defaultCenter={{ lat, lng }} />
		}
  />
);

Map.defaultProps = {
	lat: 37.7749,
	lng: 122.4194,
};

Map.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
};
export default Map;
