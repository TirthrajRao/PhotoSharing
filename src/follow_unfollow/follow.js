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
		this.handleClickFollow = this.handleClickFollow.bind(this);
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

			handleClickFollow(item) {
				console.log('data====================>',item);
				this.setState({follow: !this.state.follow});
				item['text'] = 'Unfollow';
				var apiBaseUrl = config.getBaseUrl() + "user/follow";
				var payload={
					"requestedUser":JSON.parse(localStorage.getItem('curruntUser')).data._id,
					"userTobeFollowed":item._id
				}
				console.log(payload)

				axios.post(apiBaseUrl, payload)
				.then(function (response) {
					console.log("response=====>    ",response.data);
					console.log("Unfollow sucessfully................");
				},function(err){
					console.log(err);

				})
			}
			handleClickUnfollow(item){
				console.log('data====================>',item);
				this.setState({follow: !this.state.follow});
				item['text'] = 'Unfollow';
				var apiBaseUrl = config.getBaseUrl() + "user/unfollow";
				var payload={
					"requestedUser":JSON.parse(localStorage.getItem('curruntUser')).data._id,
					"userTobeUnFollowed":item._id
				}
				console.log(payload)

				axios.post(apiBaseUrl, payload)
				.then(function (response) {
					console.log("response=====>    ",response.data);
					console.log("follow sucessfully................");
				},function(err){
					console.log(err);

				})
			}

			// }

			render(){
				// const text = this.state.follow ? 'UnFollow' : 'Follow';
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
					<button className="mdc-button btn1" onClick={()=>this.handleClickFollow(item)}>
					<span className="mdc-button__label">{item.text?item.text :'Follow' }</span>
					</button>
					</td>
					<td>
					<button className="mdc-button btn1" onClick={()=>this.handleClickUnfollow(item)}>
					<span className="mdc-button__label">{item.text?item.text :'Unfollow' }</span>
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


