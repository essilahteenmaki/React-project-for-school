import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container'
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import StoreIcon from '@material-ui/icons/Store';
import {red} from '@material-ui/core/colors';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Settingss from './Settingss';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  textField: {
    flexBasis: 150,
  },
}));


function Edit(){
	const [vaate, setVaate] = useState([]);
	const tyylit = useStyles();
	const [virhe, setVirhe] = useState('Haetaan');
	let {id} = useParams();

 useEffect( () => {
   async function getMy () {
     try {
       const response = await fetch('http://localhost:8080/vaate/' +id);
       const json = await response.json();
       setVaate(json);
       setVirhe('');
     } catch (error) {
       setVaate([]);
       setVirhe('Tietojen haku ei onnistunut');
     }
   }

   getMy();
 }, []);
	
	
	const luokat = [{
	value: 'Mekko',
	label: 'Mekko',
	},
	{
	value: 'Housut',
	label: 'Housut',
	},
	{
	value: 'Paita',
	label: 'Paita',
	},
	{
	value: 'Takki',
	label: 'Takki',
	},
	{
	value: 'Hame',
	label: 'Hame',
	},

	];
	
	const koot = [{
		value: '34',
		label: '34',
	},
	{
		value: '36',
		label: '36',
	},
	{
		value: '38',
		label: '38',
	},
	{
		value: '40',
		label: '40',
	},
	{
		value: '42',
		label: '42',
	},
	
	
	]
	
	const edit = (e) => {
		setVaate ({
			...vaate, 
			[e.target.name]: e.target.value 
		});
	}
	
	 let history = useHistory();
	
	const muuta = (e, id, luokka, vari, koko, hinta) => {
		e.preventDefault();
		let formData = {
			'id': id,
			'luokka': luokka,
			'vari': vari,
			'koko': koko,
			'hinta': hinta
		};
		axios.put('http://localhost:8080/edit', formData)	
			.then(response => {
					console.log("ok");
					history.push("/listown");
				}
			)
		
  }

	
	return(
	<div style={{align: 'center', paddingBottom: '20px'}}>
	
		<Settingss/>
		<Container maxWidth="sm">
		<h2 style={{ textAlign: 'center', color: 'pink' }}>Muuta vaatteen tiedot</h2> <br/>
		

		<form className={tyylit.root} autoComplete="off">

		<TextField select
        variant='outlined'
		id='luokka'
		className={clsx(tyylit.margin, tyylit.textField)}
       
        value={vaate.luokka}
		name='luokka'
        onChange={(e) => edit(e)}
		>
        {luokat.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
		</TextField>
		
		<TextField select
        variant='outlined'
		id='koko'
		className={clsx(tyylit.margin, tyylit.textField)}
        label='Koko'
        value={vaate.koko}
		name='koko'
        onChange={(e) => edit(e)}
		>
        {koot.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
		</TextField>
		
		<TextField
        id="hinta"
		className={clsx(tyylit.margin, tyylit.textField)}
        variant="outlined"
        label="Hinta"
		name='hinta'
        value={vaate.hinta}
        onChange={(e) => edit(e)}
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
		/>
		
		<TextField
        id="vari"
		className={clsx(tyylit.margin, tyylit.textField)}
        variant="outlined"
       
		name='vari'
        value={vaate.vari}
        onChange={(e) => edit(e)}
		/>
		
		
		
		<IconButton onClick={(e) => muuta(e, vaate.id, vaate.luokka, vaate.hinta, vaate.koko, vaate.vari)} className={clsx(tyylit.margin, tyylit.textField)}> Muuta <AddIcon/> </IconButton>

		</form>
		
		<Link color='secondary' to="/listown"> Palaa </Link>
	
		
		</Container>
		</div>
		
	 	

	)

}
export default Edit;




