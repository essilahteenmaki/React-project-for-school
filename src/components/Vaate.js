import React from 'react';
import {useParams} from 'react-router'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';



function Vaate (props) {
	
	//let {id} = useParams();
	//let {kuva} = useParams();
	let {luokka} = useParams();
	let {vari} = useParams();
	let {koko} = useParams();
	let {hinta} = useParams();
	
  return (
  <Container maxWidth="md">
				<Card style={ { maxWidth: 220, minWidth: 200} }>
					<CardContent>
					 <Typography> { luokka }</Typography>
					 <Typography>Hinta: { hinta }</Typography>
                     <Typography>Koko: {koko}</Typography>
                     <Typography>Väri: {vari}</Typography>
					 <Link to='/mystore'><Typography> Palaa </Typography> </Link>
                  </CardContent>
                </Card>
	</Container>
  );
}
export default Vaate;
