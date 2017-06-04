import PropTypes from 'prop-types';
import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';

const Map = ({ lat, lon }) => (
  <div className="col-md-6">
    <Gmaps
      width={'100%'}
      height={'350px'}
      lat={lat}
      lng={lon}
      zoom={12}
    ><Marker
        lat={lat}
        lng={lon}
      />
    </Gmaps>
  </div>
	);


//Map.propTypes = {
//	lat: PropTypes.number,
//	lon: PropTypes.number,
//};
export default Map;
