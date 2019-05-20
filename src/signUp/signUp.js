import React from 'react';
import {MDCFormField} from '@material/form-field';
import {MDCTextField} from '@material/textfield';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import './signUp.css';
import { Link } from 'react-router-dom';
import Config from '../config.js';
import axios from 'axios';

let config = new Config();
export default class signUp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			firstName: "",
			lastName: "",
			email:"",
			password:""
		};
		this.onChange = this.onChange.bind(this)

	}
	onChange(e){
		this.setState ({
			[e.target.name]: e.target.value
		})
	}
	render(){
		return(
			<div className="mdc-card" >
			<center><h1>Register</h1></center>
			<div className="mdc-text-field">
			<input type="text" id="my-text-field" className="mdc-text-field__input"  name="firstName"  value={this.state.firstName}  onChange={this.onChange}/>
			<label className="mdc-floating-label" htmlFor="my-text-field">Firstname</label>
			<div className="mdc-line-ripple"></div>
			</div>

			<div className="mdc-text-field">
			<input type="text" id="my-text-field" className="mdc-text-field__input" name="lastName" value={this.state.lastName}  onChange={this.onChange} />
			<label className="mdc-floating-label" htmlFor="my-text-field">Lastname</label>
			<div className="mdc-line-ripple"></div>
			</div>

			<div className="mdc-text-field">
			<input type="email" id="my-text-field" className="mdc-text-field__input" name="email" value={this.state.email}  onChange={this.onChange}/>
			<label className="mdc-floating-label" htmlFor="my-text-field">Email</label>
			<div className="mdc-line-ripple"></div>
			</div>

			<div className="mdc-text-field">
			<input type="password" id="my-text-field" className="mdc-text-field__input" name="password" value={this.state.password}  onChange={this.onChange} />
			<label className="mdc-floating-label" htmlFor="my-text-field">Password</label>
			<div className="mdc-line-ripple"></div>
			</div>

			<button className="mdc-button btn1" onClick={(event)=>this.handleClick(event)}>
			<span className="mdc-button__label">Register</span>
			</button>

			</div>
			)
	}


	handleClick(event){
		console.log('event=============================>',event);
		console.log(this.setState)
		var apiBaseUrl = config.getBaseUrl() + "user/signup";
		// var self = this;
		var payload={
			"firstName":this.state.firstName,
			"lastName":this.state.lastName,
			"email":this.state.email,
			"password":this.state.password
		}
		console.log(payload)


		axios.post(apiBaseUrl, payload)
		.then(function (response) {
			console.log("hii    ",response);
			// alert("Register successfull")
			console.log("register successfull");
			// localStorage.setItem('Login', true);
              // this.props.history.push("/display");
              // <Redirect to='./display'/>
          },function(err){
          	console.log(err);

          })
	}
}