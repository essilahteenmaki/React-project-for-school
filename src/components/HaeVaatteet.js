import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Listaus from './Listaus';
import ListausAdd from './ListausAdd';
//const url = http://localhost:8080;


function HaeVaatteet () {

 const [vaate, setVaate] = useState([]);
 const [virhe, setVirhe] = useState('Haetaan');

 useEffect( () => {
   async function getAll () {
     try {
       const response = await fetch('http://localhost:8080/vaate/all');
       const json = await response.json();
       setVaate(json);
       setVirhe('');
     } catch (error) {
       setVaate([]);
       setVirhe('Tietojen haku ei onnistunut');
     }
   }

   getAll();
 }, [])
 
 

 if (virhe.length > 0) {
   return ( <Typography color='primary'>{ virhe }</Typography> );
 }

 if (vaate.length > 0) {
   return ( <ListausAdd vaate={ vaate } /> );
 }

 return ( <Typography color='primary'>Ei ole</Typography> );
}

export default HaeVaatteet;