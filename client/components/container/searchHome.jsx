import Home from '../presentation/home.jsx'
import { connect } from 'react-redux'
import { doSearch, setFilter, resetPage } from '../../actions.jsx'

const mapStateToProps = state => {
	return {
		filter: state.filters
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setFilter: (min, max) => {
			dispatch(setFilter(min, max));
		},
		searchClick: (min, max) => {
			dispatch(doSearch(1, min, max));
		},
		resetPage: () => {
			dispatch(resetPage());
		}
	}
}

const searchHome = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default searchHome;