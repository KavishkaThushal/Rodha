import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BMW1 from '../../assets/images/bmw1.jpeg'
import BMW2 from '../../assets/images/bmw2.jpeg'
import BMW3 from '../../assets/images/bmw3.jpeg'
import BMW4 from '../../assets/images/bmw4.jpeg'
import BMW5 from '../../assets/images/bmw5.jpeg'

const data = [BMW1, BMW2, BMW3, BMW4, BMW5]

function Details() {
      
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
    <div className='flex w-full gap-8 flex-col items-center justify-center h-[150vh] '>
        <div className='flex w-[40%]'>
        <Swiper className='s-swiper' slidesPerView={slidersettings.slidesPerView} spaceBetween={slidersettings.spaceBetween} breakpoints={slidersettings.breakpoints}>
                <SliderButtons/>
                    {data.map((card, i) => {
                       return(<SwiperSlide key={i}>
                        <img key={i} src={card} alt='car' className=' flex justify-center items-center rounded-md w-[80vh] h-[50vh] object-cover' />
                     </SwiperSlide>) 
})}                  
                </Swiper> 
           
        </div>
        <div className='flex flex-col w-[60%] py-10 bg-blue-200 rounded-md'>
            <div className='text-center text-2xl font-semibold mb-5'>BMW GTR r54</div>
            <div className='flex flex-col gap-4 w-[80%] mx-auto'>
            <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Contact</span>
                    <span>:</span>
                    <span className='font-normal'>0712344567</span>
                    
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20  '>Brand</span>
                    <span>:</span>
                    <span className='font-normal'>Nissan</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>YOM</span>
                    <span>:</span>
                    <span className='font-normal'>2015</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Gear</span>
                    <span>:</span>
                    <span className='font-normal'>Manual</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Price</span>
                    <span>:</span>
                    <span className='font-normal'>Rs.22000000</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Model</span>
                    <span>:</span>
                    <span className='font-normal'>Gtr 35</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Milleage</span>
                    <span>:</span>
                    <span className='font-normal'>12000km</span>
                </span>

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Fuel Type</span>
                    <span>:</span>
                    <span className='font-normal'>Petrol</span>
                </span>
                 

                 
                 
                 <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Options</span>
                    <span>:</span>
                    <span className='font-normal'>AIR CONDITION, POWER STEERING, POWER MIRROR, POWER WINDOW</span>
                </span>

                

                

                <span className='flex flex-row gap-1 text-xs sm:text-sm font-normal sm:font-semibold'>
                    <span className='w-20 '>Details</span>
                    <span>:</span>
                    <span className='w-[80vh] text-justify font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, consequatur. Nulla ea illum, eum harum corporis laboriosam culpa facere voluptatum, excepturi deserunt assumenda dicta a!</span>
                </span>
            </div>
        </div>
    </div>
  )
}


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=" flex flex-row justify-end absolute gap-1 bottom-5 right-10 z-50">
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

