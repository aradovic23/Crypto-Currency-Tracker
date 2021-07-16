import './App.scss';
import React ,{useState, useEffect} from 'react'
import Crypto from '../components/Crypto'
import { Switch, Paper, Grid, Typography } from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/Header'
import { purple} from '@material-ui/core/colors';
import { ErrorRounded } from '@material-ui/icons';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [data, setData]= useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  const  api_key = '76c32478d66164ace32a9065dd87622c191e142f'
  const cors_fix = 'https://cors-anywhere.herokuapp.com/'

  // in order to activate cors anywhere you need to open the link in the browser 👆
  useEffect(() => {
    fetch(`${cors_fix}https://api.nomics.com/v1/currencies/ticker?key=${api_key}&interval=1d&convert=EUR&per-page=150`,{
      method: 'GET',
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Referrer-Policy': 'no-referrer'
      },
    })
    .then(r=>r.json())
    .then(data=>setData(data))
  }, [])

  useEffect(() => {
    setFiltered(
      data?.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);



  if (!data) {
    return null;
  }


const darkGrey='#202124';
  const theme = createTheme({
    palette:{
      type:  darkMode? 'dark' : 'light',
      primary: {
        main:darkGrey, 
      } ,
      secondary: purple,
      background: {
        paper: darkMode? '#121212' : '#fff'
      }
      
    }
  })


  return (
    <ThemeProvider theme={theme}>
    <Paper style={filtered.length <= 10 ? {height: '100vh'} : {height: '100%'}}>
      <Grid container direction='column'>
        <Grid item>
          <Header darkMode={darkMode} data={data} handleChange={(e)=>setSearch(e.target.value)}/>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2}/>
          <Grid item xs={12} sm={8}>
            <div className='half-content'>
              <div className='switcher'>   
                <Switch onChange={()=>setDarkMode(!darkMode)}></Switch> 
                <Typography color={ darkMode? 'secondary' : 'primary'}>
                Change the theme mode to {darkMode ? 'light' : 'dark'}
                </Typography>
              </div>
   
              {filtered ?  
                <div> 
                Total results: {filtered.length}
                </div> :'' }
          </div>


      {filtered.length === 0 ? <div className='no-results'>
        
        <ErrorRounded fontSize='large'/>
        <h2>No results found</h2>
        
        </div> : ''}

        {filtered?.map((e)=>(<Crypto 
        image={e.logo_url} 
        current_price={e.price} 
         name={e.name} 
         id={e.id}
         key={e.id}
        price_change={e.['1d'].volume_change_pct} 
        market_cap={e.market_cap}
        rank={e.rank}
        currency={e.currency}
        high={e.high}
        high_timestamp={e.high_timestamp}
        volume={e.['1d'].volume}
        darkMode={darkMode}/>))}
  
    
    </Grid>
    <Grid item xs={false} sm={2}/>
    </Grid>
    </Grid>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
