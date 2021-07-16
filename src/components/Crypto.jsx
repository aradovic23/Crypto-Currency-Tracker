import { Typography } from '@material-ui/core'
import { ArrowDropDownRounded, ArrowDropUpRounded } from '@material-ui/icons'
import React from 'react'
import './Crypto.scss'


const Crypto = ({darkMode, name, image,current_price, market_cap,volume, price_change, rank, currency, high, high_timestamp, id}) => {


    return (
        <div key={id} className={darkMode ? 'list dark' : 'list'}>
            
            <div className='box rank'  >
                <p>rank</p>
                <span >
                {rank}
                </span>
            </div>
            
            <div className="box image">
                 <img src={image} id='logo' alt="no-img" />
            </div>

            <div className="box name">
                <p>name</p>
                <Typography align='left' variant={'h6'} color={darkMode? 'secondary':'inherit'}>
                    {name}
                 </Typography>
            </div>
            
            <div className='box currency'>
                <p>currency</p>
                <span>
                    {currency}
                </span>
            </div>

            <div className="box">
                <p>price change</p>
                <span>
              {price_change < 0 ? ( <div className="priceChange"> <ArrowDropDownRounded style={{color: '#d32f2f'}}/>
           <span style={{color: '#d32f2f'}}>{parseFloat(price_change).toFixed(2)}%
           </span>  
           </div> )
            :
            ( <div className='priceChange'> <ArrowDropUpRounded style={{color: '#388e3c'}}/>
                <span style={{color: '#388e3c'}}>{parseFloat(price_change).toFixed(2)}%
                </span> 
                </div>)
            }
                  </span>
                  </div>
            <div className='box'>

                <p>current price</p>
                <span>            
                    {parseFloat(current_price).toFixed(2)}€
                </span>
            </div>

            <div className='box'>
                <p>high price</p>
                <span>
                    {parseFloat(high).toFixed(2)}€
                </span>
            </div>

            <div className="box">
                <p>high price date</p>
                <span>
                {high_timestamp.slice(0,10)}

                </span>
            </div>
          

              
           
            <div className='box cap'>
                <p>market cap</p>
                <span>
                {market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}€
                </span>
            </div >

            <div className='box'>
                <p>volume</p>
                <span>
            {volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0,-3)}
            </span>
            </div>
        </div>
    )
}

export default Crypto
