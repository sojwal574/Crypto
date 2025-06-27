import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes  ,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      
      {/* Mounting the navbar in app.jsx */}
      <Navbar/>

      {/* Adding Route and Routes for Home and Coin Page */}
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/coin/:coinId' element = {<Coin/>}></Route>
      </Routes>


      {/* mounted footer */}
      <Footer/> 



    </div>
  )
}

export default App