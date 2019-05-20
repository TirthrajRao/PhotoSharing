import React from 'react';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import Config from '../config.js'
import axios from 'axios';
let config = new Config();
export default class followUnfollow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data : [],
			follow: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		fetch(config.getBaseUrl() + "user/get-all-user").
		then((Response)=>Response.json()).
		then((response)=>{
			console.log('all user===================>',response);
			// for(let i=0; i<=response.length; i++){

				this.setState(prevState => ({
					data: [...prevState.data,...response]
				}))
				// this.setState({
					// 	data:response
					// })
			},function(err){
				console.log(err);
			})
	}

	handleClick(id) {
		// console.log('data====================>',data);
		this.setState({follow: !this.state.follow});
		var apiBaseUrl = config.getBaseUrl() + "user/follow";
		var payload={
				"requestedUser":JSON.parse(localStorage.getItem('curruntUser')).data._id,
				"userTobeFollowed":id
			}
			console.log(payload)
			
			// axios.post(apiBaseUrl, payload)
			// .then(function (response) {
			// 	console.log("hii    ",response);
			// 	// alert("Register successfull")
			// 	console.log("login successfull");
			// 	localStorage.setItem('Login', true);
			// 	localStorage.setItem('curruntUser', JSON.stringify(response));
			// 	this.props.history.push("/Home");
			// 	// <Redirect to='./display'/>
			// },function(err){
			// 	console.log(err);

			// })
		}

	// }


	render(){
		const text = this.state.follow ? 'UnFollow' : 'Follow';
		console.log(this.state.data)

		return(
			<div>
			<p>users</p>
			<div>
			<table>
			{this.state.data.map((item,index)=>
			<tr>
				
			<td>
				<div key="index">{item.name}</div>
			</td>
			<td>
				<button className="mdc-button btn1" onClick={this.handleClick}>
				<span className="mdc-button__label">{text}</span>
				</button>
			</td>
				
			</tr>
				)}
			
			</table>
			</div>
			</div>
			);
	}
}


