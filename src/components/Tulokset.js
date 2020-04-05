import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Container from '@material-ui/core/Container'
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



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
   container: {
    marginBottom: 50,
  }

}));



function Tulokset (props) {
		const tyylit = useStyles();
return(
		
	<div>
		<Container maxWidth="xs">
		
			<Grid spacing={2} container className={tyylit.container}>
      {props.tulokset.map (tulos => {
            return (
              <Grid item key={ tulos.id }>
                <Card style={ { maxWidth: 220, minWidth: 200} }>
                    <CardMedia image={'http://localhost:8080' + '/download/' + tulos.kuva} title='Vaate' style={ {height:200} }/>
                    <CardContent>
                    <Typography>{ tulos.luokka }</Typography>
                    <Typography>Hinta: { tulos.hinta }</Typography>
                    <Typography>Koko: {tulos.koko}</Typography>
                    <Typography>Väri: {tulos.vari}</Typography>                                                                                                                                      
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

export default Tulokset;