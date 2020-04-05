import React from 'react';
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
import axios from 'axios';
import { Link } from 'react-router-dom';


function Listaus2(props){
	
	const poista = (e, id) => {
	e.preventDefault();
    axios.delete('http://localhost:8000/delete/' +id)
	      .then(res => { 
		  return axios.get('http://localhost:8080/vaate/my')
      })
	  .then (res => {
		  const vaatekpl = res.data;
	  })
	}

	    return (
	<Container maxWidth="md">
      <Grid spacing={2} container>
      {
          props.vaate.map (vaatekpl => {
            return (
              <Grid item key={ vaatekpl.id }>
                <Card style={ { maxWidth: 220, minWidth: 200} }>
					<CardMedia image={ vaatekpl.kuva } title='Vaate' style={ {height:200} }/>
					<CardContent>
					<Typography>{ vaatekpl.luokka.toUpperCase() }</Typography>
					<Typography>Hinta: { vaatekpl.hinta }</Typography>
                    <Typography>Koko: {vaatekpl.koko}</Typography>
                    <Typography>Väri: {vaatekpl.vari}</Typography>
					<IconButton onClick={ (e) => poista(e, vaatekpl.id) }>	<DeleteIcon/>
                  </CardContent>
                </Card>
              </Grid>
            )
          }
        )
      }
      </Grid>
	   </Container>
    )	
	
}

export default Listaus2;