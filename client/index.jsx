import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/presentation/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill'
import thunkMiddleware from 'redux-thunk'
import AutoApp from './reducers.jsx'

let store = createStore(AutoApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)