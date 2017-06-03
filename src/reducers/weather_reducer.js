import * as type from '../constants/actionTypes';

export default function (state = [], action) {
	switch (action.type) {
	case type.FETCH_WEATHER_PENDING:
		return 'loading...';
	case type.FETCH_WEATHER_SUCCESS:
		return action.payload;
	case type.FETCH_WEATHER_FAILED:
		return 'Oops... something went wrong :/';
	default:
		return state;
	}
}
