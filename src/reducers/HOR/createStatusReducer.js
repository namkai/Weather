function createStatusReducer(actionName = '') {
	actionName = actionName.toUpperCase();
	return (state = [], action) => {
		console.log(action, `i'm the action`)
		switch (action.type) {
		case `FETCH_${actionName}_PENDING`:
			return 'pending';
		case `FETCH_${actionName}_SUCCESS`:
			return action.response;
		case `FETCH_${actionName}_FAILED`:
			return action.response;
		default:
			return state;
		}
	};
}

export default createStatusReducer;
