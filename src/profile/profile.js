import React from 'react';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import Config from '../config.js'
import './profile.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Avatar from 'react';	

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },	
   root1: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },

});
function FullWidthGrid(props){
  const { classes } = props;
  return (
  	<div className="border_class">
  	<h1>Photosharing</h1>
  	<div className="custom_container">
  	<div className={classes.root}>
  	<Grid container spacing={12}>
  	<Grid item xs={2}>
  	<Paper className={classes.paper}>
  	<div className="profile_image">
  	<img src={require("../images/women1.jpg")} alt="photo" />
  	</div>
  	</Paper>
  	</Grid>
  	<Grid item sm={8}>
  	<Paper className={classes.paper}>
  	<h2>User Name</h2>
  	<label>username</label>
  	</Paper>
  	</Grid>
  	<Grid item sm={2}>
  	<Paper className={classes.paper}><div className="follow_button"><Button variant="outlined"  className={classes.button}>
  	follow
  	</Button></div></Paper>
  	</Grid>
  	</Grid>
  	</div>
  	<div className="follow_section">
  	<Grid container spacing={12}>
 	<Grid item sm={3}>
 	<p>Followers</p>
 	<span className="gray">893</span>
 	</Grid>
 	<Grid item sm={3}>
 	<p>Following</p>
 	<span className="gray">100k</span>
 	</Grid>
 	<Grid item sm={3}>
 	<p>Post</p>
 	<span className="gray">48</span>
 	</Grid>
 	<Grid item sm={3}>
 	<p>Story</p>
 	<span className="gray">06</span>
 	</Grid>  
 	</Grid>
 	</div>
 	<div className="post_image">
 	<img src={require("../images/women1.jpg")} alt="photo" />
 	<img src={require("../images/women2.jpg")} alt="photo" />
 	<img src={require("../images/men3.jpg")} alt="photo" />
 	<img src={require("../images/men3.jpg")} alt="photo" />
 	<img src={require("../images/women1.jpg")} alt="photo" />
 	</div>
 	</div>
 	</div>
 	);
}	
FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FullWidthGrid);