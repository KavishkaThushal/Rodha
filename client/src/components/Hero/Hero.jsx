import React from 'react'
import HeroImg from '../../assets/images/bmw.png'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'



function Hero() {



  return (
    <div className='flex h-[50vh]  sm:h-[80vh] w-[40vh]  mx-auto sm:mx-0 ' >
        <div className='flex  flex-col my-10 items-center    sm:my-auto   sm:mx-10 gap-5' >
           
           <motion.h1 initial={{y: "2rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                  duration:2,
                  type:"spring"
                }}
                 className='flex flex-col text-4xl sm:text-6xl font-bold '>
                  Find your next adventure on  
                  <br/>
                  <span className='flex text-blue-500'>
                    wheels.
                    </span></motion.h1>
           <p className='felx font-semibold text-slate-400 text-xs sm:text-sm  sm:w-[80vh]'>Cruise into your dream ride. Our curated selection guarantees quality, reliability, and style at every turn. Start your journey today and drive into a world of automotive excellence.</p>
          
          <div className='flex absolute left-7 sm:left-0 top-[33vh] sm:top-0 sm:relative flex-col sm:flex-row gap-2 sm:gap-5 my-30 sm:my-5'>
            <div className='flex flex-col gap-0 sm:gap-1 items-center '>
              <div className='flex flex-row gap-1 items-center text-2xl sm:text-4xl font-bold justify-center'>
              <CountUp start={7800} end={8000} duration={4}/>
              <span className='text-blue-500 pb-1'>+</span>
              </div>
              <span className='flex text-sm sm:text-base text-slate-400'>Premium Selection</span>
            </div>

            <div className='flex flex-col gap-0 sm:gap-1 items-center '>
              <div className='flex flex-row gap-1 items-center text-2xl sm:text-4xl font-bold justify-center'>
              <CountUp start={5800} end={6000} duration={4}/>
              <span className='text-blue-500 pb-1'>+</span>
              </div>
              <span className='flex text-sm sm:text-base text-slate-400'>Happy Customers</span>
            </div>

            <div className='flex flex-col gap-0 sm:gap-1 items-center '>
              <div className='flex flex-row gap-1 items-center text-2xl sm:text-4xl font-bold justify-center'>
              <CountUp start={2800} end={3000} duration={4}/>
              <span className='text-blue-500 pb-1'>+</span>
              </div>
              <span className='flex text-sm sm:text-base text-slate-400'>Variety of Models</span>
            </div>
          </div>
        </div>
        
        <motion.img
        initial={{y: "5rem",opacity:0,scale:0.5}}
                animate={{y:0,opacity:1,scale:1}}
                transition={{
                  duration:3,
                  type:"spring"
                }}
        src={HeroImg} alt='Hero' className='w-[30vh]  sm:w-[100vh] h-[20hv] sm:h-[80vh] object-cover absolute  bottom-[48vh] sm:bottom-0 sm:top-10 right-2 sm:right-20'/> 
      
        
    </div>
  )
}

export default Hero