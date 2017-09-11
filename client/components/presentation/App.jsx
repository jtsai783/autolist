import React from 'react';
import Home from '../container/searchHome.jsx';
import ShowResults from '../container/showResults.jsx';
import Details from '../container/showDetails.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			  <Router>
			    <div>
			      <Route exact path="/" component={Home} />
            	  <Route path="/results" component={ShowResults}/>
            	  <Route path="/details" component={Details}/>
			    </div>
			  </Router>
		)
	}
}

export default App;