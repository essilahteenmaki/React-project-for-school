import React, {useState} from 'react';
import Form from './Form';
import Header from './Header';
import Ostokset from './Ostokset';
import Vaatteet from './Vaatteet';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
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
import MyInfo from './MyInfo';
import Etusivu from './Etusivu';
import CropDinIcon from '@material-ui/icons/CropDin';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}));




function Menuu(){
	const classes = useStyles();	
	const [value, setValue] = useState(0);
	
	const handleChange = (event, valueof) => {
		setValue (valueof);
	}
	
	
	return(
	<div>
		<AppBar position="fixed" className={classes.appBar}>
	
			<Tabs value={value} onChange={handleChange} centered>
			<Tab icon={<CropDinIcon/>} component={Link} to='/'/>
			<Tab icon={<StoreIcon/>} component={Link} to='/store'/>
			<Tab icon={<ShoppingBasket/>} component={Link} to='/cart'/>
			<Tab icon={<AccountCircle/>} component={Link} to='/me'/>
			</Tabs>

		</AppBar>
		


    
	</div>
	)
}


export default Menuu;