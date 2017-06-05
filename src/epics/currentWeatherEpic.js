import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';

const currentWeatherEpic = action$ =>
	action$.ofType(type.FETCH_WEATHER)
		.switchMap(action => ajax({
			url: `${api.CURRENT_WEATHER}&q=${action.payload}`,
			crossDomain: true,
		})
			.map(({ response }) => ({ type: type.FETCH_CURRENT_WEATHER_SUCCESS, response }))
			.takeUntil(action$.ofType(type.FETCH_CURRENT_WEATHER_ABORTED))
			.catch(error => Observable.of({ type: type.FETCH_CURRENT_WEATHER_FAILED, error })))

export default currentWeatherEpic;
