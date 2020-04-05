import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
  table: {
	  marginTop: '20px'
  }
  
}));




  

function OstoskoriSel(props){
	const classes = useStyles();		

	    return (
				<Container maxWidth="sm">
				<Paper className={classes.table}>
				
					<Table>
						<TableHead>
							<TableRow>
							    <Checkbox />
								<TableCell>Tyyppi</TableCell>
								<TableCell>Hinta</TableCell>
								<TableCell>Koko</TableCell>
								<TableCell>Väri</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
						{props.ostos.map(vaatekpl => {
							return(
							<TableRow key={vaatekpl.id}>
								<Checkbox checked={vaatekpl.valitse} />
								<TableCell>{vaatekpl.luokka}</TableCell>
								<TableCell>{vaatekpl.vari}</TableCell>
								<TableCell>{vaatekpl.vari}</TableCell>
								<TableCell>{vaatekpl.koko}</TableCell>
							</TableRow>
						)
						})
						}
						</TableBody>
					</Table>
					
				</Paper>
				</Container>
			
		)
		

		
		
	
}

export default OstoskoriSel;