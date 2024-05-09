import React from 'react'
import {FaFacebook, FaTwitter, FaGooglePlus } from 'react-icons/fa';


function Footer() {
  return (
    <div className='flex  w-full justify-between items-center mt-32 h-[25vh] sm:h-[40vh] border-t-2 border-blue-500 border-spacing-5'>
        <div className='flex flex-row w-full justify-between items-start p-5 '>
        <div className='flex flex-col gap-3 sm:w-[50vh] '>
           <h1 className='flex text-xl sm:text-6xl font-bold text-left text-blue-500'>RODHA</h1>
           <span className='flex text-xs sm:text-sm font-semibold'>Welcome to our premier vehicle selling website, where excellence meets choice. With a diverse range of quality vehicles meticulously selected to suit every taste and budget.</span>
           <span className='flex flex-row gap-2 '>
             <FaFacebook className='size-5 text-blue-500'/>
             <FaGooglePlus className='size-5 text-blue-500'/>
             <FaTwitter className='size-5 text-blue-500'/>
           </span>
        </div>

        <div className='sm:flex  hidden sm:visible flex-col gap-2  sm:w-[50vh] '>
        <h1 className='flex text-base sm:text-xl font-bold text-blue-500'>Popular Vehicle Brands</h1>
       
        <ul className=' text-sm font-semibold mt-3'>
            <li>Toyota</li>
            <li>Izuzu</li>
            <li>Nissan</li>
            <li>Kie</li>
            <li>Leyland</li>
            <li>Mitsubishi</li>
            <li>Honda</li>
        </ul>
        </div>

        <div className='flex flex-col gap-2 sm:w-[50vh] '>
         
            <h1 className='flex text-base sm:text-xl font-bold text-blue-500'>Get in Touch</h1>
            
        
        <span>
            <h1 className='flex font-semibold text-sm sm:text-base'>Email:</h1>
            <h1 className='flex font-semibold text-xs sm:text-sm'>rodhasrilanka@gmail.com</h1>
        </span>

        <span>
            <h1 className='flex  font-semibold text-sm sm:text-base'>Phone:</h1>
            <h1 className='flex font-semibold text-xs sm:text-sm'>+94572234103</h1>
        </span>

        <span>
            <h1 className='flex font-semibold text-sm sm:text-base'>Address:</h1>
            <h1 className='flex font-semibold text-xs sm:text-sm'>32,Kahagolla,Diyathalawa,<br/>Bandrawela.</h1>
        </span>
          
        </div>
        </div>
    </div>
    
  )
}

export default Footer