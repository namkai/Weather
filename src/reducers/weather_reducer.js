import * as type from '../constants/actionTypes';

export default function (state = [], action) {
	console.log(action, `i'm the action!`)
	switch (action.type) {
	case type.FETCH_CURRENT_WEATHER_PENDING:
		return 'pending';
		case type.FETCH_CURRENT_WEATHER_SUCCESS:
		return [...state,action.response];
	case type.FETCH_CURRENT_WEATHER_FAILED:
		return 'error';
	default:
		return state;
	}
}
