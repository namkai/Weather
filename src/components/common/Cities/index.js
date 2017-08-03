import { compose, lifecycle, pure } from 'recompose';

import Cities from './view';

const lifecycleMethods = lifecycle({
  componentWillMount() {
    let cities = localStorage.getItem('storedCities');
    if (cities !== null && cities !== '') {
      cities = cities.split('&');
      this.props.updateStoredCities(cities);
    }
  },
  componentDidUpdate() {
    const stringCities = this.props.storedCities.join('&');
    localStorage.setItem('storedCities', stringCities);
  },
});

const PureCities = pure(Cities);

export default compose(lifecycleMethods)(PureCities);