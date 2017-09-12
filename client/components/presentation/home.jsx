import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/home.css'
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import 'nouislider/distribute/nouislider.min.css'

class Home extends React.Component {

	constructor(props){
		super(props);
		this.slider;
	}

	nextPath(path){
		this.props.history.push(path);
	}

	getSliderValue(){
		var val = this.slider.noUiSlider.get();
		var minPrice = parseInt(val[0].substring(2));
		var maxPrice = parseInt(val[1].substring(2));
		this.props.setFilter(minPrice, maxPrice);
		this.props.resetPage();
		this.props.searchClick(minPrice, maxPrice);
		this.nextPath('/results');
	}

	render(){
		return(
			<div>
				<div className="homewrapper">
					<div className="centered">
						<div id="slider" style={{marginBottom: "50px", fontFamily: "Titillium Web"}}> </div>
						<div className="btn" onClick={() => {this.getSliderValue()}}> 
							Find My Next Car
						</div>
			  		</div>
				</div>			
			</div>
		)
	}

	componentDidMount(){
		this.slider = document.getElementById('slider');

		this.slider.style.width = "1200px";

		noUiSlider.create(slider, {
			start: [0, 100000],
			connect: true,
			tooltips: true,
			step: 100,
			range: {
				'min': [0],
				'50%': [10000, 300],
				'70%': [30000, 700],
				'max': [100000]
			},
			format: wNumb({
				prefix: '$ ',
				decimals: 0
			})
		});
	}
}

export default withRouter(Home);