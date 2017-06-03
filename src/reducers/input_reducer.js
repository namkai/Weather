import * as type from '../constants/actionTypes';

export default function (state = '', action) {
	switch (action.type) {
	case type.USER_INPUT:
		return action.payload;
	default:
		return state;
	}
}
