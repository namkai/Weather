import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as type from '../constants/actionTypes';
import * as api from '../constants/api';

const fetchWeatherEpic = action$ =>
	action$.ofType(type.FETCH_WEATHER)
		.mergeMap(action => ajax(`${api.ROOT_URL}/${action.payload} `)
			.map(payload => ({ type: type.FETCH_WEATHER_SUCCESS, payload }))
			.takeUntil(action$.ofType(type.FETCH_WEATHER_ABORTED))
			.catch(error => Observable.of({ type: type.FETCH_WEATHER_FAILED, error }))
			.startWith({ type: type.FETCH_WEATHER_PENDING }));

export default fetchWeatherEpic;
