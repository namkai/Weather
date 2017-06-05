import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';

const forecastWeatherEpic = action$ =>
	action$.ofType(type.FETCH_WEATHER)
		.switchMap(action => ajax({
			url: `${api.FORECAST_WEATHER}&q=${action.payload}`,
			crossDomain: true,
		})
			.map(({ response }) => response.list.map(ele => ({ date: ele.dt_txt, temp: ele.main.temp * 9 / 5 - 459.67 })))
			.map(temp => ({ type: type.FETCH_FORECAST_WEATHER_SUCCESS, response: temp }))
			.takeUntil(action$.ofType(type.FETCH_FORECAST_WEATHER_ABORTED))
			.catch(error => Observable.of({ type: type.FETCH_FORECAST_WEATHER_FAILED, error })))

export default forecastWeatherEpic;
