import React from 'react'
import Dodge from '../../assets/images/carblack.jpg'
import { motion } from 'framer-motion'
function Card() {
  return (
    <motion.div 
    initial={{y: "2rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                  duration:3,
                  type:"easeIn"
                }}
    className=" flex flex-row p-1 sm:p-3 rounded-md overflow-hidden sm:gap-4 sm:w-[60vh] sm:h-[25vh] shadow-xl  bg-slate-200 ">
        <div className='flex sm:justify-center sm:items-center'>
        <img className="  w-[14vh] h-[14vh] sm:w-[20vh] sm:h-[20vh]  rounded-md" src={Dodge} alt="Sunset in the mountains"/>
        </div>
        <div className=" flex justify-center items-center px-2 py-2">
            <div className=" flex flex-col text-sm mb-2 w-full ">
                <span className='flex flex-row gap-1 text-xs font-normal sm:font-semibold'>
                    <span className='w-12 '>Brand</span>
                    <span>:</span>
                    <span className='text-black'>Dodge</span>
                </span>
                <span className='flex flex-row gap-1 text-xs  font-normal sm:font-semibold '>
                    <span className='w-12 '>Model</span>
                    <span>:</span>
                    <span className='text-black'>Challenger</span>
                </span>
                <span className='flex flex-row gap-1 text-xs  font-normal sm:font-semibold '>
                    <span className='w-12 '>Town</span>
                    <span>:</span>
                    <span className='text-black'>Colombo</span>
                </span>
                <span className='flex flex-row gap-1 text-xs  font-normal sm:font-semibold '>
                    <span className='w-12 '>Price</span>
                    <span>:</span>
                    <span className='text-black'>Rs.22000000</span>
                </span>
                <span className='flex flex-row gap-1 text-xs  font-normal sm:font-semibold '>
                    <span className='w-12 '>Millage</span>
                    <span>:</span>
                    <span className='text-black'>1234km</span>
                </span>
                <span className='flex flex-row gap-1 text-xs  font-normal sm:font-semibold '>
                    <span className='w-12 '>Date</span>
                    <span>:</span>
                    <span className='text-black'>2024/12/31</span>
                </span>
                
            </div>
                
            </div>
            
    </motion.div>
  )
}

export default Card

