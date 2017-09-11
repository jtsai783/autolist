import { combineReducers } from 'redux';

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

function filters(state = {min: 0, max: 100000}, action){
	switch(action.type){
		case "SET_FILTER":
			return {
				min: action.min,
				max: action.max
			}
		default:
			return state;
	}
	
}

function page(state = 1, action){
	switch(action.type){
		case "NEXT_PAGE":
			return state + 1;
		case "PREV_PAGE":
			return state - 1;
		default:
			return state;
	}
}

function selectedCar(state = null, action){
	switch(action.type){
		case "SELECT_CAR":
			return action.resultId;
		default:
			return state;
	}
}

const AutoApp = combineReducers({
	searchResults,
	filters,
	page,
	selectedCar
});

export default AutoApp