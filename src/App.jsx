import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes  ,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


const App = () => {
  return (
    <div className='app'>
      
      {/* Mounting the navbar in app.jsx */}
      <Navbar/>

      {/* Adding Route and Routes for Home and Coin Page */}
      <Routes>

        {/* We will wrap the home page and coin pages in protected route so that when user logs in then only he can access the web */}

        <Route path='/' element = {<ProtectedRoute><Home /></ProtectedRoute>}></Route>
        <Route path='/coin/:coinId' element = {<ProtectedRoute><Coin/></ProtectedRoute>}></Route>  {/* the coinId will be used in the rendering of the individual coin page */}
      

        


        {/* signup path */}
        <Route path="/signup" element={<SignUp />} />


        {/* Login path */}
        <Route path="/login" element={<Login />} />

      
      
      </Routes>


      {/* mounted footer */}
      <Footer/> 



    </div>
  )
}

export default App