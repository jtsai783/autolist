import Home from '../presentation/home.jsx'
import { connect } from 'react-redux'
import { doSearch } from '../../actions.jsx'

const mapDispatchToProps = dispatch => {
	return {
		searchClick: () => {
			dispatch(doSearch());
		}
	}
}

const searchHome = connect(
	null,
	mapDispatchToProps
)(Home)

export default searchHome;