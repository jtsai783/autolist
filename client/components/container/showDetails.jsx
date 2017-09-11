import Detail from '../presentation/detail.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	var car;
	for (var i = 0; i < state.searchResults.length; i++){
		if (state.searchResults[i].id === state.selectedCar){
			car = state.searchResults[i];
		}
	}

	return {
		car: car
	}
}

const ShowDetails = connect(
	mapStateToProps
)(Detail)

export default ShowDetails