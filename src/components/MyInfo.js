import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {red} from '@material-ui/core/colors';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Settingss from './Settingss';
import Basket from './Basket';
import Container from '@material-ui/core/Container';
import essi from './essi.png';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 60,
    height: 60,
  },
  card: {
    maxWidth: 450,
	minWidth: 330,
  },
  container: {
	alignItems: 'center',
    justify: 'center'
  }
}));



function MyInfo(){
	
	const classes = useStyles();	

	
	
	return(
	
	<div>
	<Container maxWidth="xs" className={classes.container}>
	<Settingss/>
	<Card className={classes.card}>
		<CardHeader
        avatar={ <Avatar alt="Essi" src={essi} className={classes.bigAvatar} />} title="Essi Lähteenmäki"
		/>
		<CardContent>
        <Typography color='secondary'> Lisää tuotteita myyntiin, selaa, muokkaa ja poista omia tuotteitasi. </Typography> 
		</CardContent>
    </Card> 
	
	</Container>
	</div>
	)
}


export default MyInfo;





