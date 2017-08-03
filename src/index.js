import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'rxjs';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './redux/store';
import './style/v4/docs/assets/css/application.css';
import './style/v4/dist/toolkit-inverse.css';
import './style/v4/docs/assets/css/docs.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
