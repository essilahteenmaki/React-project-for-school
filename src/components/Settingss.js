import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import AddIcon from '@material-ui/icons/Add';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import StoreIcon from '@material-ui/icons/Store';
import {red} from '@material-ui/core/colors';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  appBar: {
	
  }
}));



function Settings(){
	
	const classes = useStyles();	
	const [anchorMenu, setMenuOpen] = useState(null);
	const person = (event) => {setMenuOpen(event.currentTarget);}
	const close = () => {setMenuOpen(null);}
	
	
	return(
	
	<div>
	
	<AppBar position="relative" className={classes.appBar} color='inherit'>
		 <Toolbar >
			<IconButton onClick={person} color='secondary'> <MenuIcon /> </IconButton> 
			<Typography>
            Minä
          </Typography>
		 </Toolbar>
	</AppBar>

    
	<MenuList>
		<Menu anchorEl={anchorMenu} open={Boolean(anchorMenu)} onClose={close} anchorOrigin={{vertical: 'top'}} getContentAnchorEl={null}>
			<MenuItem onClick={close} component={ Link } to='/listown'>
				<ListItemText primary='Omat myytävät'/>
			</MenuItem>
			<MenuItem onClick={close} component={ Link } to='/add'>
				<ListItemText primary='Lisää tuote'/>
			</MenuItem>
		</Menu>
	</MenuList>

	</div>
	)
}


export default Settings;