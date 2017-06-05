function createStatusReducer(actionName = '') {
	actionName = actionName.toUpperCase();
	return (state = [], action) => {
		console.log(`i'm the action!`, action)
		switch (action.type) {
		case `FETCH_${actionName}_SUCCESS`:
			return action.response;
		case `FETCH_${actionName}_FAILED`:
			return 'error';
		default:
			return state;
		}
	};
}

export default createStatusReducer;
