import Results from '../presentation/results.jsx'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		results: state.searchResults
	}
}

const ShowResults = connect(
	mapStateToProps
)(Results)

export default ShowResults