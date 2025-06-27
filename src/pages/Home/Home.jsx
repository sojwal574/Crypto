import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext';

// to display the charts we need to import Link
import {Link} from 'react-router-dom'
// we will use the Link so that when people will click on the element it will open another page
// replace tableLayout div with Link




const Home = () => {

    // ! Search functionality in the webpage
    const [input , setInput] = useState('');
    const inputHandler = (event) => {
      setInput(event.target.value);

      // now if we clear the input field table should display as it is
      if(event.target.value === "") {
        setDisplayCoin(allCoin)
      }
    }

    const searchHandler = async (event) => {
      event.preventDefault();
      const coins =  await allCoin.filter((item)=> {
        return item.name.toLowerCase().includes(input.toLowerCase())
      })
      // bitcoin , now if we type bit then it will display the filtered data
      setDisplayCoin(coins) // display the filtered data in the table
    }


  const {allCoin , currency} = useContext(CoinContext);
  const [displayCoin , setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  } , [allCoin])


  return (
    <div className='Home'>


      <div className='hero'>

        <h1>Largest <br/> Crypto Marketplace</h1>
        
        <p>Welcome to the world's largest cryptocurrency marketplace . 
          Sign up to explore more about cryptos
        </p>

        {/* for searching the crypto */}
        <form onSubmit={searchHandler}>
          {/* using list attribute the coin data will be displayed in the input field */}
          <input onChange = {inputHandler} list='coinlist' value={input} type="text" placeholder='Search Crypto' required/>
          
          {/* We need to add the suggestions in the search field */}

            <datalist id='coinlist'>

              { allCoin.map((item , index) => (<option key={index} value={item.name}/>
              )) }


            </datalist>
          
          
          <button type='submit'>Search</button>

        </form>
      </div>


      {/* Display a table of different crypto that are trending */}
        <div className="crypto-table">
          <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:'center'}}>24H Change</p>
            <p className='market-cap'>Market Cap</p>
          </div>

          {/*  Display the data in the table */}
          {
          displayCoin.slice(0,10).map((item, index) => (

            // The 'to' property will redirect us from the home page to the coin page
              <Link to={`/coin/${item.id}`} className='table-layout' key={index}>

                  <p>{item.market_cap_rank}</p>
                  <div>
                    <img src={item.image} alt="" />
                    <p>{item.name + " - " +  item.symbol}</p>
                  </div>
                  <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                  <p
                  
                    className={item.price_change_percentage_24h > 0 ? "green" : "red"}
                  
                  >{Math.floor(item.price_change_percentage_24h*100)/100}</p>

                  <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>

              </Link>


          ))
        }

        </div>

    </div>
  )
}



export default Home