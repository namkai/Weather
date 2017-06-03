import * as type from '../constants/actionTypes';

export default function (state = '', action) {
	switch (action.type) {
	case type.UPDATE_QUERY:
		return action.payload;
	case type.FETCH_WEATHER:
		return '';
	default:
		return state;
	}
}
