import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../roots/rootEpic';
import rootReducer from '../roots/rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
);

export default configureStore;
