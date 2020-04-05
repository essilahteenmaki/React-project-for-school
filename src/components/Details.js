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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 50,
  }
}));


function Details(){
	const classes = useStyles();	
	const [vaate, setVaate] = useState([]);
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




return (
	<div>
	<Settingss/>
	
	<Container maxWidth="xs">
			<Grid spacing={0} container className={classes.container}>
              <Grid>
                <Card style={ { maxWidth: 600, minWidth:400} }>
					<CardContent>
					<Typography>Tuotenumero: {vaate.id}</Typography>
					<Typography>Tyyppi: {vaate.luokka}</Typography>
					<Typography>Hinta: {vaate.hinta}</Typography>
					<Typography>Koko: {vaate.koko}</Typography>
					<Typography>Väri: {vaate.vari}</Typography>
					<Link to="/listown"> Palaa </Link>
				  </CardContent>
                </Card>
              </Grid>
      
      </Grid>
	  </Container>
	  </div>
    )	
	
}

export default Details;