import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	nextPath(path){
		this.props.history.push(path);
	}

	render(){
		return(
			<div>
			    <button onClick={() => {this.props.searchClick(); this.nextPath('/results')}}>
			    	search
			    </button>
		  	</div>
		)
	}

}

export default withRouter(Home);