import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'

import { Link } from 'react-router-dom' // here we use link so that when \
// we are on some page and by clicking on the logo or the 
// Home option we will get redirected to the home page 




const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  // * when we will select any from the dropdown the fxn will call the setcurrency  
  const currencyHandler = (event)=>{
    switch (event.target.value) {
      case "usd" : {
        setCurrency({name : "usd" , symbol : "$"})
        break;
      }
      case "eur" : {
        setCurrency({name : "eur" , symbol : "€"}) // alt + 0128 for symbol
        break;
      }
      case "inr" : {
        setCurrency({name : "inr" , symbol : "₹"}) // ctrl + alt + 4 for this symbol
        break;
      }
      default : {
        setCurrency({name : "usd" , symbol : "$"}) 
        break;
      }
    }
  }


  return (
    <div className='navbar'>
        
        <Link to={'/'}>
          <img src= {logo} alt="logo" className='logo' />
        </Link>



        <ul>
            {/* Menu links */}
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className="nav-right">
            {/* Dropdown menu */}
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <button>Sign up <img src= {arrow_icon} alt="" /> </button>


        </div>


    </div>
  )
}

export default Navbar

// ? Mount the navbar in app.jsx