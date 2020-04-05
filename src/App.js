import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Ostokset from './components/Ostokset';
import Vaatteet from './components/Vaatteet';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menuu from './components/Menu'
import MyInfo from './components/MyInfo'
import Etusivu from './components/Etusivu'
import Vaate from './components/Vaate'
import OstoskoriSel from './components/OstoskoriSel'
import Ostokset2 from './components/Ostokset2'
import HaeVaatteet from './components/HaeVaatteet'
import ListOwn from './components/ListOwn'
import Details from './components/Details'
import Edit from './components/Edit'

const theme = createMuiTheme({
	palette: {
		primary: {main: red[200], contrastText: 'white'},
		secondary: {main: red[100], contrastText: 'white'},
		text: {primary: red[100], secondary: 'grey'},
		action: {active: red[200], hover: red[50]}
	},
	
	
});



function App() {


  return (
  
  <BrowserRouter>
  <MuiThemeProvider theme = {theme}>
    <div className="App">
	<Menuu/>
	<Header/>
	<Switch>
		<Route exact path='/' component={ Etusivu } />	
		<Route path='/store' component={ HaeVaatteet } />	
		<Route path='/listown' component={ ListOwn } />	
		<Route path='/edite/:id' component={ Edit } />	
		<Route path='/add' component={ Form } />
		<Route path='/cart' component={ Ostokset } />
		<Route path='/me' component={ MyInfo } />

		//ei kaytossa
		<Route path='/edit/:id' component={ Details } />	
		<Route path='/edit/:luokka/:koko/:hinta/:vari' component={ Vaate } />	
	</Switch>
	</div>
	</MuiThemeProvider>
	</BrowserRouter>
  );
}

export default App;
