import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Listaus2 from './Listaus2';
//import ListEdit from './ListEdit';

//const [url, setUrl] = useState('http://localhost:8080');

function HaeOmatVaatteet () {

 const [vaate, setVaate] = useState([]);
 const [virhe, setVirhe] = useState('Haetaan');

 useEffect( () => {
   async function getAll () {
     try {
       const response = await fetch('http://localhost:8080/vaate/my');
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


 if (vaate.length > 0) {
	return ( <Listaus2 vaate={ vaate } /> );
 } else {
	return ( <Typography>{ virhe }</Typography> );
 }


}

export default HaeOmatVaatteet;