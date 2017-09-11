import React from 'react';
import '../styles/results.css'


const ListItem = ({item}) => (
	<div className="listitem">
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

const Results = ({ results }) => {

	const listItems = results.map((result) => (
		<ListItem key={result.id} item={result} />
	));

	return (
		<div>
			{listItems}
		</div>
	)
}


export default Results;