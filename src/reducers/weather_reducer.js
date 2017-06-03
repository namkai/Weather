import * as type from '../constants/actionTypes';

export default function (state = [], action) {
	switch (action.type) {
		case type.ADD_WEATHER:
			return [...state, action.payload];
	}
}