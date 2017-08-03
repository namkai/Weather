import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import Weather from '../../components/features/Weather';

import getWeatherState from '../selectors/getWeatherState';

const mapStateToProps = (state) => getWeatherState(state);

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(Weather);
