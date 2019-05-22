import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './login/login.js';
import signUp from './signUp/signUp.js';
import Home from './home/home.js';
import profile from './profile/profile.js';
import followUnfollow from './follow_unfollow/follow.js';

class App extends Component {

	render() {
		return (
			<Router>
			<div>
			<Route  path="/signup" component={signUp} />
			<Route  path="/profile" component={profile} />
			<Route  path="/Login" component={Login} />
			<Route  path="/Home" component={Home} />
			<Route  path="/followUnfollow" component={followUnfollow} />
			</div>
			</Router>
			);
	}
}
export default App;
