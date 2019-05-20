
import React from 'react';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import './home.css';
import { Link } from 'react-router-dom';
import Config from '../config.js';
import axios from 'axios';
import followUnfollow from '../follow_unfollow/follow'


let config = new Config();
export default class signUp extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		firstName: "",
	// 		lastName: "",
	// 		email:"",
	// 		password:""
	// 	};
	// 	this.onChange = this.onChange.bind(this)

	// }
	onChange(e){
		// this.setState ({
		// 	[e.target.name]: e.target.value
		// })
	}
	render(){
		return(
			<div >
			
			<button className="mdc-button btn1" onClick={(event)=>this.handleClick(event)}>
			<span className="mdc-button__label">Explore</span>
			</button>

			<button className="mdc-button btn1" onClick={(event)=>this.handleClick(event)}>
			<span className="mdc-button__label">Profile</span>
			</button>

			<Link to={"/followUnfollow"}><button className="mdc-button btn1">
			<span className="mdc-button__label">Follow & UnFollow</span>
			</button></Link>

			<button className="mdc-button btn1" onClick={(event)=>this.logOut()}>
			<span className="mdc-button__label">Logout</span>
			</button>


			</div>
			)
		}


		handleClick(event){
			console.log('event=============================>',event);

		}
		logOut(){
			console.log("function call");
        localStorage.clear();
		}
	}