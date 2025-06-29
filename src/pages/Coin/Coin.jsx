import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'

// Now we need to get the coin id from the url so that when coin page is loaded the respective coin opens
import { useParams } from 'react-router-dom'
import {CoinContext} from '../../context/CoinContext'

const Coin = () => {

  const {coinId} = useParams(); // get coinId from the URL
  const [coinData , setCoinData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {

    // from docs of coingecko API , getting coin information by Id

      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-MZABAKVE2s7Z79VjNBc8Bxon'}
      };

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(res => res.json())
        .then(res => setCoinData(res))
        .catch(err => console.error("Sojwal there is error here" + err));

    }

  // whenever the currency changes it will execute the function , the fetched data will be saved in coinData
  useEffect(()=>{
    fetchCoinData();
  } , [currency])


  
  if(coinData) {
    return (
      <div className='coin'>

        <div className="coin-name">
            {/* display coin information */}
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>


        </div>


      </div>
    )
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    )
  }
}

export default Coin