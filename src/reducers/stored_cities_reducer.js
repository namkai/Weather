import * as type from '../constants/actionTypes';

export default function (state = [], action) {
	console.log( action.response, 'i\'m the actions!');
	switch (action.type) {
	case type.FETCH_CURRENT_WEATHER_SUCCESS:
		return [
			...state,
			action.response.name,
		];
		case type.UPDATE_STORED_CITIES:
		return action.response;
	default:
		return state;
	}
}
