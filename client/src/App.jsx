import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import About from './Pages/About/About'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'
import Create from './Pages/Create/Create'

import Details from './Pages/Details/Details'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Vehicles from './Pages/Vehicles/Vehicles'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/vehicles" element={<Vehicles/>} />
        <Route path="/vehicles/:id" element={<Details/>} />
        <Route path="/create" element={<Create/>} />
        
        
     </Routes>
     <Footer/>
    </BrowserRouter>
    <ToastContainer/> 
    </>
  )
}

export default App