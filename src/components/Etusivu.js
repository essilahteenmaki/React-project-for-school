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
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  textField: {
    flexBasis: 280,
  },
   container: {
    marginBottom: 50,
  }

}));



function Etusivu () {
	const tyylit = useStyles();
	const [etsi, setEtsi] = useState('');
	const [tulokset, setTulokset] = useState({hits: ['']});
	const [viesti, setViesti] = useState('');
	


	const muuta = (e) => {
		setEtsi (e.target.value )
	}



 useEffect( () => {
   async function getAll () {
     try {
       const response = await fetch('http://localhost:8080/vaate/hae/' +etsi);
       const json = await response.json();
       setTulokset(json);
     } catch (error) {
       setTulokset([]);
     }
   }

   getAll();
 }, [etsi])


	

const etsii = (e) => {
		if (tulokset.length > 0 ) {
			setViesti('Tuotetta saatavilla!');
		} if (tulokset.length == 0 ) {
			setViesti('Tutustu muihin tuotteisiin!');
		}
}




const mappaa = () => {
	return tulokset.hits.map(tulos => {
		return (
			<tr>
			<td> tulos.luokka </td>
			<td> tulos.vari </td>
			</tr>
		)
	})
}


	
return(
		
	<div>
	 <Grid alignItems="center" alignContent="center">
		<Container  maxWidth="xs" alignItems="center" alignContent="center">
		<h2 style={{ textAlign: 'center', color: 'pink' }}>Tervetuloa kauppaan!</h2> <br/>
		
		<form className={tyylit.root} autoComplete="off">

		<TextField
		fullWidth
        id="sana"
		className={clsx(tyylit.margin, tyylit.textField)}
        variant="outlined"
        label="Hae tuotetta värin perusteella: "
		name='sana'
        value={etsi}
        onChange={(e) => muuta(e)}
		/>
		
	    <IconButton onClick={etsii}>  <SearchIcon/> </IconButton>	


		</form>
		          
	<br/>
	<Link align="left" color='secondary' to="/store"> {viesti} </Link>  
	<br/><br/>

	 <img width={290}
      src="https://svgsilh.com/svg_v2/1797603.svg"
      alt="kuva"
      />
	</Container>		
	</Grid>
	
	</div>
)
}

export default Etusivu;

