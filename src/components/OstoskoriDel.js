import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  table: {
	  marginTop: '20px',
	  marginBottom: '55px'
  }
  
}));



function Ostoskori(props){
	const classes = useStyles();	

	const [osto, setOsto] = (useState(''));

	const poista = (e, id) => {
	e.preventDefault();
    axios.get('http://localhost:8000/delete/' +id)

	      .then(res => { 
		  return axios.get('http://localhost:8000/ostoskori')
      })
	  .then (res => {
		  const ostokset = res.data;
	  })
	  window.location.reload(false);
	}	

	    return (
				<Container maxWidth="sm">
				<Paper className={classes.table}>
				<form>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell size="small" >Tyyppi</TableCell>
								<TableCell size="small" padding="none">Väri</TableCell>
								<TableCell size="small" padding="none">Koko</TableCell>
								<TableCell size="small" padding="none">Hinta</TableCell>
								<TableCell size="small" padding="checkbox">Poista</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
						{props.ostokset.map(vaatekpl => {
							return(
							<TableRow key={vaatekpl.id}>
								<TableCell size="small">{vaatekpl.luokka}</TableCell>
								<TableCell size="small" padding="none">{vaatekpl.vari}</TableCell>
								<TableCell size="small" padding="none">{vaatekpl.koko}</TableCell>
								<TableCell size="small" padding="none">{vaatekpl.hinta}</TableCell>
								<TableCell size="small" padding="checkbox"> <IconButton onClick={ (e) => poista(e, vaatekpl.id) }>	<DeleteIcon/>	</IconButton></TableCell>
							</TableRow>
						)
						})
						}
						</TableBody>
					</Table>
				</form>
				</Paper>
				</Container>
			
		)

}

export default Ostoskori;