import React from 'react';

const ListItem = ({vin}) => (
	<div>{vin}
	</div>
)

const Results = ({ results }) => {

	const listItems = results.map((result) => (
		<li key={result.id}>
			<ListItem vin={result.vin}/>
		</li>
	));

	return (
		<div>
			{listItems}
		</div>
	)
}


export default Results;