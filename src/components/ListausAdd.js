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
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8080';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 50,
  }
}));


function ListausAdd(props){
	const classes = useStyles();	
	
	const lisaaKoriin = (e, luokka, hinta, koko, vari) => {
		e.preventDefault();
		let formData = {
			'luokka': luokka,
			'vari': vari,
			'koko': koko,
			'hinta': hinta
		};
		axios.post('http://localhost:8000/buy', formData)	
			.then(response => {
					console.log("ok");
				}
			)		

  }



	return (

	<Container maxWidth="md" className={classes.container}>
      <Grid justify="center" alignItems="center" alignContent="center" spacing={2} container>
      {
          props.vaate.map (vaatekpl => {
            return (
              <Grid alignItems="center" alignContent="center"  item key={ vaatekpl.id }>
                <Card style={ { maxWidth: 440, minWidth: 340} }>
					<CardMedia image={url + '/download/' + vaatekpl.kuva} title='Vaate' style={ {height:200} }/>
					<CardContent>
					<Typography align="left" color="textSecondary">{ vaatekpl.luokka }</Typography>
					<Typography align="left" color="textSecondary">Hinta: { vaatekpl.hinta } €</Typography>
                    <Typography align="left" color="textSecondary">Koko: {vaatekpl.koko} EU Koko</Typography>
                    <Typography align="left" color="textSecondary">Väri: {vaatekpl.vari}</Typography>
					<IconButton onClick={ (e) => lisaaKoriin(e, vaatekpl.luokka, vaatekpl.hinta, vaatekpl.koko, vaatekpl.vari)}> <ShoppingCartIcon /> </IconButton>
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

export default ListausAdd;