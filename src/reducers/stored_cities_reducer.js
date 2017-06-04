import * as type from '../constants/actionTypes';

export default function (state = [], action) {
	switch (action.type) {
	case type.FETCH_CURRENT_WEATHER_SUCCESS:
		return [
			...state,
			action.response,
		];
	default:
		return state;
	}
}
