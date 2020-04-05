import React, { useState, useEffect } from 'react';
import Ostoskori from './Ostoskori';
import OstoskoriDel from './OstoskoriDel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  table: {
	  fontSize: '30px',
  }
  
}));

function Ostokset(){
	const classes = useStyles();
	const [ostokset, setOstokset] = useState([]);
	const [virhe, setVirhe] = useState('Haetaan');

 useEffect( () => {
   async function getAll () {
     try {
       const response = await fetch('http://localhost:8000/ostoskori');
       const json = await response.json();
       setOstokset(json);
       setVirhe('');
     } catch (error) {
       setOstokset([]);
       setVirhe('Tietojen haku ei onnistunut');
     }
   }

   getAll();
 }, [])
	
	return(
	<div>
		<Typography color='primary' className={classes.table}> Ostoskori </Typography> 
		<OstoskoriDel ostokset = {ostokset}/>
	</div>
	)
}





export default Ostokset;