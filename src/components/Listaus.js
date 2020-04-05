import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

const url = 'http://localhost:8080';


function Listaus(props){
	
	const lisaaKoriin = (e) => {
    e.preventDefault();

  }
  
	

	    return (
	<Container maxWidth="md">
      <Grid spacing={2} container>
      {
          props.vaate.map (vaatekpl => {
            return (
              <Grid item key={ vaatekpl.id }>
                <Card style={ { maxWidth: 220, minWidth: 200} }>
					<CardMedia image={url + '/download/' + vaatekpl.kuva} title='Vaate' style={ {height:200} }/>
					<CardContent>
					<Typography>{ vaatekpl.luokka.toUpperCase() }</Typography>
					<Typography>Hinta: { vaatekpl.hinta }</Typography>
                    <Typography>Koko: {vaatekpl.koko}</Typography>
                    <Typography>Väri: {vaatekpl.vari}</Typography>
					<IconButton> <ShoppingCartIcon /> </IconButton>
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

export default Listaus;