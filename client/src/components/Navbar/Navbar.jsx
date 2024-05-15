import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {FaSearch,FaBars} from 'react-icons/fa'
 import {useSelector} from 'react-redux'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const [show, handleShow] = useState(false)
    const {user}=useSelector(state=>state.user)
    const [submitData,setSubmitData]=useState('')
    const navigate=useNavigate()
    const handleToggle = () => {
        handleShow(!show)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
            const urlParams=new URLSearchParams()
            urlParams.set('Brand',submitData)
           
            const searchQuery=urlParams.toString()
             setSubmitData('')
            navigate(`/search?${searchQuery}`)

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
                <form onSubmit={handleSubmit}  className='bg-slate-300 p-1 rounded-lg flex items-center'>
                <input type='text' placeholder='Search' className=' bg-transparent focus:outline-none px-1 font-medium w-full sm:w-64 '/>
                <button  type='submit'><FaSearch className='text-blue-500'/></button>
            </form>
                
                <Link to='/' className=' font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Home</Link>
                <Link to='/about' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>About</Link> 
                
                <Link to='/signin' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Sign in</Link>  
                
                
                </span>
                
            </motion.div>}
            <form onSubmit={handleSubmit} className=' hidden sm:visible border-2 border-blue-500 sm:p-2 sm:rounded-lg sm:flex sm:items-center '>
                <input type='text' value={submitData} onChange={(e)=>(setSubmitData(e.target.value))} placeholder='Search' className=' bg-transparent focus:outline-none px-1 text-sm font-medium  w-full sm:w-64 '/>
                <button  type='submit'><FaSearch className='text-blue-500 focus:outline-none hover:text-blue-700'/></button>
            </form>
            <div className='hidden sm:visible sm:flex   sm:items-center sm:gap-4'>
            <Link to='/' className=' font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Home</Link>
                <Link to='/about' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>About</Link> 
                <Link to='/vehicles' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>Vehicles</Link> 
                
                {user? 
                    <Link to='/profile'  className='flex justify-center items-center'>
                    <img src={user.photo} className=' rounded-full h-10 w-10 object-cover' alt='profile image'/> 
                    </Link> 
                    :   <Link to='/signin' className='font-semibold text-base sm:text-lg text-black hover:text-blue-500'>
                        Sign in
                        </Link>  }
                    
                     
            </div>
             
            
        </div>
        <div className='w-full h-[.01rem] bg-blue-500'></div>
    </>
  )
}

export default Navbar