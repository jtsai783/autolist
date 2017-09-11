import React from 'react';
import Paginate from '../container/paginate.jsx'
import { withRouter } from 'react-router-dom';
import { selectCar } from '../../actions.jsx';
import { connect } from 'react-redux'
import '../styles/results.css'


const ListItem = ({item, history, selectCar }) => (
	<div className="listitem" onClick={() => {history.push('/details'); selectCar(item.id)}}>
		<div className="imgcontainer">
			<img className="primary-photo" src={item.primary_photo_url} />
		</div>
		<div className="details">
			<div className="primary-details">
				<div className="primary-left">
					<div className="title">
						{item.year} {item.make} {item.model}
					</div>
					<div className="mileage">{item.mileage}</div>
				</div>
				<div className="primary-right">
					<div className="price">{item.price}</div>
				</div>
			</div>
			<div className="secondary-details">
				<div className="location">{item.city}, {item.state}</div>
			</div>
		</div>
	</div>
)

const ListItemWithRouter = withRouter(ListItem);

const mapDispatchToProp = dispatch => {
	return {
		selectCar: (resultsId) => {
			dispatch(selectCar(resultsId));
		}
	}
}

const SelectListItemWithRouter = connect(null, mapDispatchToProp)(ListItemWithRouter);

const Results = ({ results }) => {

	const listItems = results.map((result) => (
		<SelectListItemWithRouter key={result.id} item={result} />
	));

	return (
		<div style={{maxWidth: '1000px', margin: 'auto'}}>
			{listItems}
			<Paginate />
		</div>
	)
}


export default Results;