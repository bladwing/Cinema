import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/header'
import Menu from './Components/menu'
import Leftbar from './Components/leftbar'
import Content from './Components/content'
import ContactC from './Components/contact'
import Footer from './Components/footer'
import Login from './Components/login'
import GalleryC from './Components/gallery'
import NotFound from './Components/404';

import './static/css/bootstrap.css'
import './static/css/bootstrap.min.css'
import './static/css/bootstrap-theme.css'
import './static/css/bootstrap-theme.min.css'
import './static/css/font-awesome.min.css'
import './static/css/font-awesome.css'
import './static/css/animation.css'
import './static/css/screen.css'
import './static/css/lity.css'
import './static/css/ie.css'


function App() {
  return (
  	<Router>
  	<div id="home1" className="container-fluid standard-bg">
  		<Header />
      	<Menu />
      		<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/contact" component={Contact} />
				<Route path="/login" component={Login} />
				<Route path="*" component={NotFound} status={404} />
			</Switch>
	</div>
		<Footer />
	</Router>

  );

}

class Home extends React.Component {
	state= {
		category: "Rock"
	
	}

	changeCategory = (catName) => {
		this.setState({category:catName})
	}
	render() {
		return (<div>
		
		 	<GalleryC />
		 	 <h2 className="icon"><i className="fa fa-television" aria-hidden="true"></i>Video</h2>
			<Leftbar category={this.state.category} changeCategory={this.changeCategory}/>
			<Content category={this.state.category}/>
		</div>)
	}
}

function Contact() {
	return (
		<div>
			<h2 className="icon"><i className="fa fa-television" aria-hidden="true"></i>Contact</h2>
			<ContactC />
		</div>
		)
	}


export default App;
