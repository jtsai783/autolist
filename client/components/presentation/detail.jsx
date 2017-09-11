import React from 'react';
import '../styles/details.css'


const Detail = ({car}) => (
	<div className="vehicle-details" style={{maxWidth: '1000px', margin: 'auto'}}>
		<div className="main">
			<div className="photo">
				<img src={car.primary_photo_url} />
			</div>
			<div className="main-info">
				<div className="main-info-left">
					<div className="title">{car.year} {car.make} {car.model}</div>
					<div className="mileage">{car.mileage}</div>
				</div>
				<div className="main-info-right">
					<div className="price">{car.price}</div>
				</div>
			</div>
		</div>
		<div className="basicinfo">
			<div className="header">Basic Info</div>
			<div className="basicinfocontainer">
				<div className="infocontainer">
					<div className="infoname">Trim</div>
					<div className="info">{car.trim}</div>
				</div>
				<hr />
				<div className="infocontainer">
					<div className="infoname">VIN</div>
					<div className="info">{car.vin}</div>
				</div>
			</div>
		</div>
		<div className="sellerinfo">
			<div>Seller Info</div>
			<div className="sellername">{car.dealer_name}</div>
		</div>
	</div>
)

export default Detail;