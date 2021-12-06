import React, {Component} from 'react'
import './css/Header.css'
import { Typography, Grid,CardMedia, Button, TextField, TableContainer, Paper, Table, TableHead,TableBody, TableRow, TableCell} from '@material-ui/core'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

      searchTerm: '',

    };
  }
  
  componentDidMount() {

  }
  
  
  render() {
    
    return (
      <Grid container className='headerWrapper' alignContent='center' >
        <div className='menuHead'>
        
        
        </div>
        <div className='moduleTitle'>
        
        
        </div>
        
      </Grid>
    );
  }
}

export default Header;