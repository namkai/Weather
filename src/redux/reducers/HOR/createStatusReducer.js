function createStatusReducer(actionName = '') {
  actionName = actionName.toUpperCase();
  return (state = [], action) => {
    console.log(action, `i'm the actions`)
    switch (action.type) {
      case `FETCH_${actionName}_SUCCESS`:
        return action.response;
      case `FETCH_${actionName}_FAILED`:
        return [];
      default:
        return state;
    }
  };
}

export default createStatusReducer;
