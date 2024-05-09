import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {FaSearch,FaBars} from 'react-icons/fa'

import { motion } from 'framer-motion'
function Navbar() {
    const [show, handleShow] = useState(false)
   
    const handleToggle = () => {
        handleShow(!show)
    }
    
   
    
  return (
    < >
        <div className=' flex justify-between items-center   sm:max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-lg sm:text-2xl text-blue-500'>
                RODHA
            </h1>
            </Link>
            
            <FaBars className='text-blue-500 size-5 sm:hidden' onClick={handleToggle}/>
            {show==true && <motion.div
              initial={{x: "2rem",opacity:0,scale:0.8 }}
              animate={{x:0,opacity:1,scale:1}}
              transition={{
                duration:.5,
                type:"tween"
              }}
            className='flex  z-50 justify-center  sm:gap-6 absolute min-h-[18vh] w-32 p-2 pb-6 shadow-xl right-5 top-16 bg-slate-300 rounded-sm ' >
                <span className='flex gap-3 my-auto flex-col items-center  '>
                <form className='bg-slate-300 p-1 rounded-lg flex items-center'>
                <input type='text' placeholder='Search' className=' bg-transparent focus:outline-none px-1 font-medium w-full sm:w-64 '/>
                <FaSearch className='text-blue-500'/>
            </form>
                
                <Link to='/' className=' font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Home</Link>
                <Link to='/about' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>About</Link> 
                
                <Link to='/signin' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Sign in</Link>  
                
                
                </span>
                
            </motion.div>}
            <form className=' hidden sm:visible sm:bg-slate-300 sm:p-2 sm:rounded-lg sm:flex sm:items-center '>
                <input type='text' placeholder='Search' className=' bg-transparent focus:outline-none px-1 font-medium w-full sm:w-64 '/>
                <FaSearch className='text-blue-500'/>
            </form>
            <div className='hidden sm:visible sm:flex sm:gap-4'>
            <Link to='/' className=' font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Home</Link>
                <Link to='/about' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>About</Link> 
                
                <Link to='/signin' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Sign in</Link>  
            </div>
             
            
        </div>
        <div className='w-full h-[.01rem] bg-slate-400'></div>
    </>
  )
}

export default Navbar