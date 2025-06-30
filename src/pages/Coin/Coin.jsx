import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'

// Now we need to get the coin id from the url so that when coin page is loaded the respective coin opens
import { useParams } from 'react-router-dom'
import {CoinContext} from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart'

const Coin = () => {


  const {coinId} = useParams(); // get coinId from the URL

  // fetching the historical data for chart
    const fetchHistoricalData = async () => {
      //  too many requests are not allowed so go slow
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-api-key': 'CG-MZABAKVE2s7Z79VjNBc8Bxon'}
      };

      fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10&interval=daily', options)
        .then(res => res.json())
        .then(res => setHistoricalData(res))
        .catch(err => console.error(err));

    }



  const [historicalData , setHistoricalData] = useState(); // for displaying the charts

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
    fetchHistoricalData();
  } , [currency])


  
  if(coinData && historicalData) {
    return (
      <div className='coin'>

        <div className="coin-name">
            {/* display coin information */}
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>


        </div>

        {/* chart is mounted on the coin page from the LineChart.jsx file */}

        {/* In line chart we have to provide the historical data as props */}
        <div className="coin-chart">
          <LineChart historicalData = {historicalData} />
        </div>


        {/* display other information about the coin */}
        <div className="coin-info">

            <ul>
              <li>Crypto Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>

            <ul>
              <li>Current Price</li>
              <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>
            
            <ul>
              <li>Market cap </li>
              <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>

            {/*24hr highest and lowest value  */}
            <ul>
              <li>24 Hour high </li>
              <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>
            <ul>
              <li>24 Hour low </li>
              <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
            </ul>


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