import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import About from './Pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Create from './Pages/Create/Create'
import Listing from './Pages/Listing/Listing'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/list" element={<Listing/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App