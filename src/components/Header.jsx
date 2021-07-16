import React from 'react'
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core'
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Header = ({darkMode, handleChange}) => {
    const classes = useStyles();
    return (
            <AppBar position='static' color={darkMode? 'primary' : 'transparent'} >
             <Toolbar style={{justifyContent:'space-around'}} >
                <div style={{display:'flex'}}>
                  <BarChartRoundedIcon fontSize='large' color={darkMode? 'secondary' : 'primary'}/>
                  <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  Crypto Tracker
                  </Typography>
                </div>

                <div style={{display:'flex'}}>
                  <form className={classes.root} noValidate autoComplete="off">
          
                    <TextField
                        id="outlined-secondary"
                        label="Search crypto currencies"
                        variant="outlined"
                        color="secondary"
                        size='small'
                        onChange={handleChange}
                    />
                  </form>
                </div>     
             </Toolbar>
            </AppBar>
 
    )
}

export default Header
