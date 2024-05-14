import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {motion} from 'framer-motion'
import BMW1 from '../../assets/images/bmw1.jpeg'
import BMW2 from '../../assets/images/bmw2.jpeg'
import BMW3 from '../../assets/images/bmw3.jpeg'
import BMW4 from '../../assets/images/bmw4.jpeg'
import BMW5 from '../../assets/images/bmw5.jpeg'
import {useLocation} from 'react-router-dom'
import axios from 'axios' 
const dataa = [BMW1, BMW2, BMW3, BMW4, BMW5]

function Details() {
    const { pathname } = useLocation();
 
    const id = pathname.split("/").slice(-1)[0];
    const [data,setData]=useState(null)
    

    useEffect(()=>{
         const fetchData=async()=>{
            try {
                const response=await axios.get(`http://localhost:8000/api/list//listdetails/${id}`)
                if(response.data.success===true){
                    setData(response.data.data)
                }
            } catch (error) {
                console.log(error);
            }
         }
         fetchData()

    },[])

    const slidersettings = {
        slidesPerView : 1,
        spaceBetween : 5,
        breakpoints : {
            480 : {
                slidesPerView: 1
            },
            600 : {
                slidesPerView: 1
            },
            750 : {
                slidesPerView: 1
            },
            1100 : {
                slidesPerView: 1
            }
    
        }
    }

  return (
    <div className='flex w-full gap-8 my-12 flex-col items-center sm:justify-center justify-start sm:max-h-[150vh] max-h-[100vh]  '>
        <div className='flex w-full p-5 sm:p-0 sm:w-[40%]'>
        <Swiper className='s-swiper' slidesPerView={slidersettings.slidesPerView} spaceBetween={slidersettings.spaceBetween} breakpoints={slidersettings.breakpoints}>
                <SliderButtons/>
                    {data && data.imageUrls.map((card, i) => {
                       return(<SwiperSlide key={i}>
                        <img key={i} src={card} alt='car' className=' flex justify-center items-center rounded-md w-[60vh] sm:w-[80vh] sm:h-[50vh] object-cover' />
                     </SwiperSlide>) 
})}                  
                </Swiper> 
           
        </div>
        <motion.div 
        initial={{y: "2rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
          duration:2,
          type:"spring"
        }}
        className='flex flex-col sm:w-[60%] w-full  py-10 bg-blue-200 mb-10 rounded-md max-h-[80vh] sm:max-h-[300vh]'>
            <div className='text-center text-xl sm:text-2xl font-semibold mb-5'>{data && data.Brand+" "+ data.Model}</div>
            <div className='flex flex-col gap-4 sm:w-[80%] p-5 sm:p-0 mx-auto'>
            <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Contact</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Contact}</span>
                    
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20  '>Brand</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Brand}</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>YOM</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Year}</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Gear</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Gear}</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Price</span>
                    <span>:</span>
                    <span className='font-normal'>Rs.{data && data.Price}</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Model</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Model}</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Milleage</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Millage}km</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Fuel Type</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.FuelType}</span>
                </span>
                 

                 
                 
                 <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Options</span>
                    <span>:</span>
                    <span className='font-normal'>{data && data.Features.toUpperCase()}</span>
                </span>

                

                

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Details</span>
                    <span>:</span>
                    <span className='sm:w-[80vh] w-[30vh] text-justify font-normal'>{data && data.Description}</span>
                </span>
            </div>
        </motion.div>
    </div>
  )
}


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=" flex flex-row justify-end absolute gap-1 bottom-5 sm:right-10 right-5 z-50">
            <button onClick={()=>swiper.slidePrev()} className='flex justify-center items-center text-sm font-semibold text-blue-500 bg-transparent border-2 border-blue-500 h-8 sm:h-[5vh] w-8 sm:w-[5vh]  rounded-md' style={{
        backdropFilter: 'blur(8px)', 
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      }}>
                <FaChevronLeft className='size-4'/>
            </button>
            <button onClick={()=>swiper.slideNext()} className='flex justify-center items-center text-sm font-semibold text-blue-500 bg-transparent border-2 border-blue-500 h-8 sm:h-[5vh] w-8 sm:w-[5vh]  rounded-md' style={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      }}>
            <FaChevronRight className='size-4'/>
            </button>
        </div>
    );
  };

export default Details

