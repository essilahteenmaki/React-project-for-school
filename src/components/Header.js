import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  head: {
	  textAlign: 'center', 
	  fontSize: '50px',
	  marginBottom: '25px'
  }
}));



function Header () {
	const classes = useStyles();	

		return(
		
			<div style={{backgroundColor: '#ffdde5'}}>
			<Typography color='primary' className={classes.head}> Kauppa </Typography>
			</div>
		)
}

export default Header;

