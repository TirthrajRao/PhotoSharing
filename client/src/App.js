import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import Login from './login/login';
import signUp from './signUp/signUp';
import Home from './home/home.js'
import followUnfollow from './follow_unfollow/follow.js'

class App extends Component {

	render() {
		return (
			<Router>
			<div>

			<button className="mdc-button btn2">
			<Link to={"/signUp"}><span className="mdc-button__label">Sign Up</span></Link>
			</button>

			<button className="mdc-button btn2">
			<Link to={"/Login"}><span className="mdc-button__label">Login</span></Link>
			</button>
			
			<Route  path="/signup" component={signUp} />
			<Route  path="/Login" component={Login} />
			<Route  path="/Home" component={Home} />
			<Route  path="/followUnfollow" component={followUnfollow} />
			</div>
			</Router>

			);
	}
}

export default App;
