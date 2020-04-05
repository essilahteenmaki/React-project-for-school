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


function Form(){
	const tyylit = useStyles();
	
	

	 
	const [vaatteet, setValues] = useState({
		luokka: '',
		vari: '',
		koko: '',
		hinta: '',
		kuva: ''
	});
	
	const [viesti, setViesti] = useState('');
	
	const lisaa = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('luokka', vaatteet.luokka);
		formData.append('vari', vaatteet.vari);
		formData.append('koko', vaatteet.koko);
		formData.append('hinta', vaatteet.hinta);
		formData.append('kuva', vaatteet.kuva);
		
		axios.post('http://localhost:8080/vaate/my/add', formData)
			.then(response => {
				if (response.status === 200) {
					setValues({
						luokka:'', 
						vari:'',
						koko:'',
						hinta:'',
						kuva:[]
					})
					setViesti('Ok')
				}
			})
	}
	
	
	const muuta = (e) => {
		setValues ({
			...vaatteet, 
			[e.target.name]: e.target.value 
		});
	}
	
	const muutaKuva = (e) => {
		setValues({
			...vaatteet,
			[e.target.name]: e.target.files[0]
		});
	}
	
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

	
	return(
	<div style={{align: 'center', paddingBottom: '20px'}}>
	
		<Settingss/>
		<Container maxWidth="sm">
		<h2 style={{ textAlign: 'center', color: 'pink' }}>Syötä vaatteen tiedot</h2> <br/>
		
		<form className={tyylit.root} autoComplete="off">

		
		
		<TextField select
        variant='outlined'
		id='luokka'
		className={clsx(tyylit.margin, tyylit.textField)}
        label='Luokka'
        value={vaatteet.luokka}
		name='luokka'
        onChange={(e) => muuta(e)}
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
        value={vaatteet.koko}
		name='koko'
        onChange={(e) => muuta(e)}
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
        value={vaatteet.hinta}
        onChange={(e) => muuta(e)}
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
		/>
		
		<TextField
        id="vari"
		className={clsx(tyylit.margin, tyylit.textField)}
        variant="outlined"
        label="Väri"
		name='vari'
        value={vaatteet.vari}
        onChange={(e) => muuta(e)}
		/>
		
		<Input accept='image/*' name ='kuva'  id='kuva' type='file' style={{display: 'none'}}  onChange={muutaKuva}/>
		<InputLabel htmlFor='kuva'>
		<Button component='span' className={clsx(tyylit.margin, tyylit.textField)} color='primary'> Kuva <AddPhotoAlternateIcon /></Button>
		</InputLabel>
		
		
		<IconButton onClick={lisaa} className={clsx(tyylit.margin, tyylit.textField)}>  <AddIcon/> </IconButton>
		

		</form>
		
		<Typography color='secondary'> {viesti} </Typography>
	</Container>
	</div>
	)
}

export default Form;




