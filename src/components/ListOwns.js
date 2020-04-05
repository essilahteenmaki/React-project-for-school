import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import Settingss from './Settingss';
import Details from './Details';
import Listing from './Listing';


const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 50,
  }
}));


function ListOwns(){
	const classes = useStyles();	
	const [omat, setOmat] = useState([]);
	const [virhe, setVirhe] = useState('Haetaan');

 useEffect( () => {
   async function getOwn () {
     try {
       const response = await fetch('http://localhost:8080/vaate/my');
       const json = await response.json();
       setOmat(json);
       setVirhe('');
     } catch (error) {
       setOmat([]);
       setVirhe('Tietojen haku ei onnistunut');
     }
   }

   getOwn();
 }, [])




return (
	<div>
	
			<Listing omat={omat}/>
	
	  </div>
	  
    )	
	
}

export default ListOwns;