import React from 'react'
import { motion } from 'framer-motion'

function About() {
   
    const renderTextAnimation = (text) => {
    return text.split('').map((char, index) => {
      return (
        <motion.span
          key={char + "-" + index}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          initial={{ opacity: 0, y: -10, rotate: -10 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: index * .1,
            duration: .8,
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      )
    })
  }

  return (
    <div className='flex w-full flex-col justify-center items-center'>
      <div className='flex flex-col items-center gap-2 w-full'>
        <h1 className='flex text-4xl sm:text-9xl font-semibold text-blue-500 text-center'>
          {renderTextAnimation("RODHA")}
        </h1>
        <div className='flex h-1 bg-blue-500 w-full'/>
      </div>
      <div className='flex flex-row justify-center items-center w-full sm:w-[60%] my-10 gap-3 sm:px-0 px-3 '>
      <motion.div 
      initial={{y: "2rem",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{
        duration:2,
        type:"spring"
      }}
      className='flex gap-2 flex-col justify-center items-center border-2 border-blue-500 p-5 sm:p-10 rounded-md '>
        <h2 className='flex text-xl  sm:text-2xl font-semibold'>Our Mission</h2>
        <p className='flex  text-sm sm:text-base text-center font-semibold text-slate-400'>Our mission is to provide a platform for users to buy and sell vehicles.</p>
        </motion.div>
        <motion.div 
        initial={{y: "2rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
          duration:2,
          type:"spring"
        }}
        className='flex gap-2 flex-col justify-center items-center border-2 border-blue-500 p-5 sm:p-10 rounded-md '>
          <h2 className='flex text-xl  sm:text-2xl font-semibold'>Our Vision</h2>
          <p className='flex  text-sm sm:text-base text-center font-semibold text-slate-400'>Our vision is to become the number one vehicle trading platform in Sri Lanka.</p>
        </motion.div>

      </div>
      
        <motion.div 
        initial={{y: "2rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
          duration:2,
          type:"spring"
        }}
        className='flex flex-col justify-center items-center gap-3 p-10'>
          <h2 className='flex text-xl sm:text-2xl font-semibold'>Why Us</h2>
          <p className='text-xs sm:text-base text-slate-400 sm:text-center text-justify'>RODHA is the largest automobile marketplace in Sri Lanka.<br/>
           Buy and Sell vehicles in Sri Lanka's best online vehicle platform which has the largest collection of vehicles for sale.
Sri Lanka, Our little country is going through a tough time and we at Rodha wants to contribute by doing the least, keeping our platform free.
We also partner up with leading finance institutes to bring our users the best leasing offers available in Sri Lanka.
We have been connecting potential buyers with sellers since 2009 and we continue to have the best interests of our users at heart.
Post your free ad today and sell fast!</p>
        </motion.div>

        <div className='flex-flex-col w-full sm:w-[60%] justify-center items-center'>
          <form className='flex flex-col w-[60%] mx-auto mb-10  justify-center p-5 sm:p-10 gap-3 sm:gap-5 items-center bg-blue-200 rounded-md'>
            <div className='text-center '>
              <h1 className='text-xl sm:text-2xl font-semibold'>Contact Us</h1>
            </div>
          <div  className='flex flex-col gap-1'>
              <label for="password" className='font-medium text-xs'>Name</label>
              <input type='text' placeholder='Name' className='flex px-2 h-10 w-full sm:w-[50vh] text-xs focus:outline-none hover:scale-105 rounded-md border-2 border-blue-500 transition-all '/>
            </div>
            
            <div  className='flex flex-col gap-1'>
              <label for="password" className='font-medium text-xs'>Email</label>
            <input type='email' placeholder='Email' className='flex px-2 h-10 w-full sm:w-[50vh] text-xs focus:outline-none hover:scale-105 rounded-md border-2 border-blue-500 transition-all '/>
            </div>
            
            <div  className='flex flex-col gap-1'>
              <label for="password" className='font-medium text-xs'>Message</label>
            <textarea placeholder='Message' className='flex px-2 h-32 sm:h-40 w-full sm:w-[50vh] text-xs py-2 focus:outline-none hover:scale-105 rounded-md border-2 border-blue-500 transition-all '/>
            </div>
            <button className='flex px-2 py-2 justify-center items-center font-semibold text-white bg-blue-500 rounded-md text-sm w-full sm:w-[35vh] focus:outline-none hover:bg-blue-700 transition-all'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default About