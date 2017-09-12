import fetch from 'isomorphic-fetch'

export function singASong(){
	return {
		type: "SING_A_SONG"
	}
}

export function getCars(){
	return {
		type: "GET_CARS"
	}
}

export function gotCars(json){
	return {
		type: "GOT_CARS",
		data: json
	}
}

export function nextPage(){
	return {
		type: "NEXT_PAGE"
	}
}

export function prevPage(){
	return {
		type: "PREV_PAGE"
	}
}

export function resetPage(){
	return {
		type: "RESET_PAGE"
	}
}

export function selectCar(resultId){
	return {
		type: "SELECT_CAR",
		resultId
	}
}

export function setFilter(min, max){
	return {
		type: "SET_FILTER",
		min,
		max
	}
}

export function doSearch(pageNum, min, max){
	return function(dispatch){
		dispatch(getCars());

		return fetch(`https://autolist-test.herokuapp.com/search?page=${pageNum}&price_min=${min}&price_max=${max}`)
			.then(
				response => response.json(),
				error => console.log("error occured doing search")
			)
			.then(
				json => dispatch(gotCars(json))
			)
	}
}