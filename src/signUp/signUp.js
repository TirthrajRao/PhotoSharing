import React from 'react';
import {MDCFormField} from '@material/form-field';
import {MDCTextField} from '@material/textfield';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import './signUp.css';
import { Link } from 'react-router-dom';
import Config from '../config.js';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

let config = new Config();
export default class signUp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: "",
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
			<div className="border_class1">
				<h1>Photosharing</h1>
				<div className="input_feild">
				<div>
				<Grid container spacing={16} alignItems="flex-end" color="primary">
				<Grid item>
				<TextField id="input-with-icon-grid" label="Mobile Number or Email" />
				</Grid>
				</Grid>
				</div>
				<div>
				<Grid container spacing={16} alignItems="flex-end" color="primary">
				<Grid item>
				<TextField id="input-with-icon-grid" label="Full Name" />
				</Grid>
				</Grid>
				</div>
				<div>
				<Grid container spacing={16} alignItems="flex-end" color="primary">
				<Grid item>
				<TextField id="input-with-icon-grid" label="Username" />
				</Grid>
				</Grid>
				</div>
				<div>
				<Grid container spacing={16} alignItems="flex-end">
				<Grid item>
				<TextField id="input-with-icon-grid" label="Password" />
				</Grid>
				</Grid>
				</div>
				<Button style={{marginTop: 15,height: 33,padding: 0}} variant="contained" size="large">
				<label>Sign Up</label>
				</Button>
				<div style={{ marginTop: 15, color: '#837c7c', fontSize: 15,textAlign:'center'}}>
				By signing up, you agree to our Terms , Data Policy and Cookies Policy .
				</div>
				</div>
				<div className="signUp_link_box">
				Have an account? <Button href="#text-buttons" style={{textTransform: 'capitalize',color: '#3897f0'}}>Login</Button>
				</div>
				</div>

			// <div className="mdc-card" >
			// <center><h1>Register</h1></center>
			// <div className="mdc-text-field">
			// <input type="text" id="my-text-field" className="mdc-text-field__input"  name="name"  value={this.state.name}  onChange={this.onChange}/>
			// <label className="mdc-floating-label" htmlFor="my-text-field">Name</label>
			// <div className="mdc-line-ripple"></div>
			// </div>
			// <div className="mdc-text-field">
			// <input type="email" id="my-text-field" className="mdc-text-field__input" name="email" value={this.state.email}  onChange={this.onChange}/>
			// <label className="mdc-floating-label" htmlFor="my-text-field">Email</label>
			// <div className="mdc-line-ripple"></div>
			// </div>
			// <div className="mdc-text-field">
			// <input type="password" id="my-text-field" className="mdc-text-field__input" name="password" value={this.state.password}  onChange={this.onChange} />
			// <label className="mdc-floating-label" htmlFor="my-text-field">Password</label>
			// <div className="mdc-line-ripple"></div>
			// </div>
			// <button className="mdc-button btn1" onClick={(event)=>this.handleClick(event)}>
			// <span className="mdc-button__label">Register</span>
			// </button>
			// </div>
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