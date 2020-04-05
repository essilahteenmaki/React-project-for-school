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


const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 50,
  }
}));


function ListOwn(){
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
 })
 
 	const poista = (e, id) => {
	e.preventDefault();
    axios.get('http://localhost:8080/delete/' +id)
	      .then(res => { 
		  return axios.get('http://localhost:8080/vaate/my')
      })
	 // window.location.reload(false);
	}




return (
	<div>
	<Settingss/>
	
	<Container maxWidth="md">
			<Grid spacing={2} container className={classes.container}>
      { omat.map (vaatekpl => {
            return (
              <Grid item key={ vaatekpl.id }>
                <Card style={ { maxWidth: 220, minWidth: 200} }>
					<CardMedia image={'http://localhost:8080' + '/download/' + vaatekpl.kuva} title='Vaate' style={ {height:200} }/>
					<CardContent>
					<Typography>{ vaatekpl.luokka }</Typography>
					<Typography>Hinta: { vaatekpl.hinta }</Typography>
                    <Typography>Koko: {vaatekpl.koko}</Typography>
                    <Typography>Väri: {vaatekpl.vari}</Typography>
					
					<IconButton component={ Link } to={'/edite/'  +vaatekpl.id  }><EditIcon /> </IconButton>

					<IconButton onClick={ (e) => poista(e, vaatekpl.id) }>	<DeleteIcon/>	</IconButton>
					
				  </CardContent>
                </Card>
				
				
				
				
              </Grid>
            )
          }
        )
      }
      </Grid>
	  </Container>
	  </div>
	  
    )	
	
}

export default ListOwn;