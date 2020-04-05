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


const url = 'http://localhost:8080';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 50,
  }
}));




function Listaus2(props){
	const classes = useStyles();	
	
	const [muutettava, setValues] = useState({
		id: '',
		luokka: '',
		hinta: '',
		koko: '',
		vari: ''
	});
	
	const muuta = (e, id, luokka, hinta, koko, vari) => {
		e.preventDefault();
		setValues({
			id: id,
			luokka: luokka,
			hinta: hinta,
			koko: koko,
			vari: vari			
		});
		
	}
	
	const poista = (e, id) => {
	e.preventDefault();
    axios.get('http://localhost:8080/vaate/my/delete/' +id)
	}


	

	    return (
		<div>
	<Settingss/>	
	<Container maxWidth="md">
      <Grid spacing={2} container className={classes.container}>
      {
          props.vaate.map (vaatekpl => {
            return (
              <Grid item key={ vaatekpl.id }>
                <Card style={ { maxWidth: 220, minWidth: 200} }>
					<CardMedia image={url + '/download/' + vaatekpl.kuva} title='Vaate' style={ {height:200} }/>
					<CardContent>
					<Typography>{ vaatekpl.luokka }</Typography>
					<Typography>Hinta: { vaatekpl.hinta }</Typography>
                    <Typography>Koko: {vaatekpl.koko}</Typography>
                    <Typography>Väri: {vaatekpl.vari}</Typography>
					
					<IconButton component={ Link } to={'/edit/'  +vaatekpl.id  }><EditIcon /> </IconButton>
					

					
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

export default Listaus2;