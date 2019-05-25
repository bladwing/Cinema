import React from 'react';
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

// import './component/static/js/lity.js'
// import './component/static/js/bootstrap.min.js'
// import './component/static/js/test.js'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from 'header'
import Menu from 'menu'
import Leftbar from 'leftbar'
import Content from 'content'
import ContactC from 'contact'
import Footer from 'footer'
import Login from 'login'






function App() {
  return (

  	<Router>
  	<div id="home1" className="container-fluid standard-bg">
  		<Header />
      	<Menu />
      	
			<Route path="/" component={Home} exact/>
			<Route path="/gallery" component={Gallery} />
			<Route path="/contact" component={Contact} />
			<Route path="/login" component={Login} />
	</div>
		<Footer />
	

	</Router>
  );
}

function Home() {
	return (
		<div>
		 <h2 className="icon"><i className="fa fa-television" aria-hidden="true"></i>Home page</h2>
			
			<Leftbar />
			<Content />
		</div>
	)
}

function Gallery() {
	return (
		<div>
			<h2 clasNames="icon"><i className="fa fa-television" aria-hidden="true"></i>Gallery</h2>
		</div>
		)
	}
function Contact() {
	return (
		<div>
			<h2 className="icon"><i className="fa fa-television" aria-hidden="true"></i>Contact</h2>
			<ContactC />
		</div>
		)
	}
function login() {
	return (
		<div>
			<h2 className="icon"><i className="fa fa-television" aria-hidden="true"></i>Login</h2>
			<Login />
		</div>
		)
	}



export default App;
