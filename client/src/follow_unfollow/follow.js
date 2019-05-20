import React from 'react';
import Config from '../config.js'
import axios from 'axios';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './follow.css';




function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
		{props.children}
		</Typography>
		);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};


function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}



let config = new Config();
export default class followUnfollow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: 0,
			open: false,
			data : [],
			follow: false,
			name:String
		}
		this.handleClickFollow = this.handleClickFollow.bind(this);
		this.handleClickUnfollow = this.handleClickUnfollow.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};
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
				var apiBaseUrl = config.getBaseUrl() + "user/follow";
				var payload={
					"requestedUser":JSON.parse(localStorage.getItem('curruntUser')).data._id,
					"userTobeFollowed":item._id
				}
				console.log(payload)
				if(payload.requestedUser == payload.userTobeFollowed){
					console.log("user can't follow itself")
					alert("user can't follow itself")
				}else{
					axios.post(apiBaseUrl, payload)
					.then(function (response) {
						console.log("response=====>    ",response.data);
						console.log("follow sucessfully................");
					},function(err){
						console.log(err);

					})
					item['text1'] = 'Following';
				}
			}
			handleClickUnfollow(item){
				console.log('data====================>',item);
				this.setState({follow: !this.state.follow});
				item['text2'] = 'Unfollow';
				var apiBaseUrl = config.getBaseUrl() + "user/unfollow";
				var payload={
					"requestedUser":JSON.parse(localStorage.getItem('curruntUser')).data._id,
					"userTobeUnFollowed":item._id
				}
				console.log(payload)
				
				if(payload.requestedUser == payload.userTobeUnFollowed){
					console.log("user can't Unfollow itself")
					alert("user can't Unfollow itself")
				}else{
					axios.post(apiBaseUrl, payload)
					.then(function (response) {
						console.log("response=====>    ",response.data);
						console.log("Unfollow sucessfully................");
					},function(err){
						console.log(err);

					})
					item['text1'] = 'Follow';
				}
			}
			handleOpen(data) {
				console.log("handle open call==================",data)
				this.setState({ open: true });
				this.setState({name:data.name})
			};

			handleClose = () => {
				this.setState({ open: false });
			};


			render(){
				// const text = this.state.follow ? 'UnFollow' : 'Follow';
				console.log(this.state.data);
				// const { classes } = this.props;
				const { value } = this.state;



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
					<span className="mdc-button__label">{item.text1?item.text1 :'Follow' }</span>
					</button>
					</td>
					<td>
					<button className="mdc-button btn1" onClick={()=>this.handleClickUnfollow(item)}>
					<span className="mdc-button__label">{item.text2?item.text2 :'Unfollow' }</span>
					</button>
					</td>

					</tr>
					)}

				</table>

				</div>
				<div>
				<AppBar position="static">
				<Tabs value={value} onChange={this.handleChange}>
				<Tab label="Following" />
				<Tab label="Followers" />
				</Tabs>
				</AppBar>
				{value === 0 && <TabContainer>
					<div>
					<table>
					{this.state.data.map((item,index)=>

						item.friends.map((friend,index)=>
							<tr>
							<td>
							<div key="index">{friend.name}</div>
							</td>
							<td>
							<button className="mdc-button btn1" onClick={()=>this.handleOpen(friend)}>
							<span className="mdc-button__label">{item.text1?item.text1 :'Following' }</span>
							</button>
							</td>
							<td>
							</td>
							</tr>
							)
						)}

					</table>
				
					</div>
					</TabContainer>}
					{value === 1 && <TabContainer>Item Two</TabContainer>}
					</div>
					</div>
					);
				}
			}
			followUnfollow.propTypes = {
				classes: PropTypes.object.isRequired,
			};


