import React from 'react'
import { connect } from 'react-redux'
import { nextPage, prevPage, doSearch } from '../../actions.jsx'
import "../styles/paginate.css"

const PaginateButtons = ({ currentPage, prevPage, nextPage, doSearch, filter }) => (
	<div className="paginatebuttons">
		<div className={"prevbtn " + (currentPage > 1 ? "enabled": "")} onClick={()=>{ currentPage > 1 ? (prevPage(),doSearch(currentPage - 1, filter.min, filter.max)) : "" }}>Prev Page</div>
		<div className="nextbtn" onClick={() => { nextPage(); doSearch(currentPage + 1, filter.min, filter.max);}}>Next Page</div>
	</div>
)

const mapStateToProps = state => {
	return {
		currentPage: state.page,
		filter: state.filters
	}
}

const mapDispatchToProps = dispatch => {
	return {
		prevPage: () => {dispatch(prevPage())},
		nextPage: () => {dispatch(nextPage())},
		doSearch: (pageNum, min, max) => {dispatch(doSearch(pageNum, min, max))}
	}
}

const Paginate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PaginateButtons)

export default Paginate