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

export function doSearch(){
	return function(dispatch){
		dispatch(getCars());

		return fetch('https://autolist-test.herokuapp.com/search?page=1')
			.then(
				response => response.json(),
				error => console.log("error occured doing search")
			)
			.then(
				json => dispatch(gotCars(json))
			)
	}
}