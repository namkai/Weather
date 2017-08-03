import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import getWeatherState from '../selectors/getWeatherState';
import Weather from '../../components/features/Weather';

function mapStateToProps(state) {
  return getWeatherState(state);
}

const connectToStore = connect(mapStateToProps);

const PureWeather = pure(Weather);

export default compose(connectToStore)(PureWeather);
