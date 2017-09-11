import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/presentation/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill'
import thunkMiddleware from 'redux-thunk'

function searchResults(state = [], action){
	switch (action.type){
		case "SING_A_SONG":
			console.log("i'm a little teapot");
			return state;
		case "GOT_CARS":
			return action.data.records.slice();
		default:
			return state;	
	}	
}

function filters(state = {}, action){
	return state;
}

const autoApp = combineReducers({
	searchResults,
	filters
});

let store = createStore(autoApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)