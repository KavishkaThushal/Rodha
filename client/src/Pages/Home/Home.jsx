import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import VanImg from '../../assets/images/wogsevagon.jpeg'
import I8Img from '../../assets/images/i8.jpeg'
import Trust from '../../assets/images/trust.png'
import Quality from '../../assets/images/quality.png'
import Finance from '../../assets/images/fianance.png'
import {motion} from 'framer-motion'
import { Brands, Districts, Price, Types } from '../../assets/utils/data'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const [formdata,setFormData]=useState({})
console.log(formdata);



  const handleSubmitData=(e)=>{

    setFormData({
         ...formdata,
         [e.target.id]:e.target.value
    })
  }     

  const handleSubmit=(e)=>{
    e.preventDefault();
        const urlParams=new URLSearchParams()
        urlParams.set('Brand',formdata.Brand)
        urlParams.set('Model',formdata.Model)
        urlParams.set('Type',formdata.Type)
        urlParams.set('Price',formdata.Price)
        urlParams.set('City',formdata.City)
        urlParams.set('Condition',formdata.Condition)
        const searchQuery=urlParams.toString()

        navigate(`/search?${searchQuery}`)
  }
  return (
    <>
    <Hero/>
    <div className='flex flex-col w-full justify-center items-center h-[40vh] sm:h-[75vh] my-20  ' style={{ backgroundImage: `url(${VanImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
    {/* <h1 className='flex text-4xl text-white font-bold mt-1'>Welcome to RODHA, the largest automobile marketplace in Sri Lanka</h1> */}
    <motion.div 
      initial={{y: "2rem",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{
        duration:2,
        type:"spring"
      }}
    className='flex flex-col z-50 w-[80%] mx-auto bg-blue-200 bg-opacity-80  shadow-2xl h-[50vh] my-20 items-center'>
         <div>
            <h1 className='flex text-lg sm:text-2xl font-bold mt-5'>Find The Best Vehicle For You</h1>
            
         </div>

          <form  onSubmit={handleSubmit} className='flex flex-col w-full p-5 sm:p-0 sm:w-[80%]  items-center gap-4 sm:gap-8 mt-1 sm:mt-5'>

          <div className='flex flex-row w-full justify-between '> 
          <select id="Brand"  onChange={handleSubmitData} className='flex text-center  py-3 w-32  sm:w-64 h-12 font-semibold focus:outline-none text-slate-400'>
        <option value=""  className='px-10 font-bold'>Brand</option>
        {
                    Brands.map((brand,index)=>(<option key={index}  value={brand}>{brand}</option>))
                }
      </select>
            
            <div className='flex flex-col gap-2 '>
           <input type="text" id='Model' placeholder='Model' onChange={handleSubmitData} className='flex px-2 py-3 w-32 sm:w-64 h-12  font-semibold text-center focus:outline-none'/>
           <span className='flex  font-semibold text-xs justify-center '>Ex: Corolla</span>
           </div>

           <select id="Type" onChange={handleSubmitData} className='flex text-center  py-3 w-32 sm:w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" >Type</option>
        {
                    Types.map((type,index)=>(<option key={index}  value={type}>{type}</option>))
                }
      </select>
          </div>

          <div className='flex flex-row w-full justify-between sm:px-36 '>
          

      <select id="City" onChange={handleSubmitData} className='flex text-center  py-3 w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" >City</option>
        {
                    Districts.map((town,index)=>(<option key={index}  value={town}>{town}</option>))
                }
      </select>

           

           <select id="Condition" onChange={handleSubmitData} className='flex text-center  py-3 w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" >Condition</option>
        <option value="Brand New">Brand New</option>
        <option value="Used">Used</option>
      </select>
          </div>
           
           <button type='submit' className='flex items-center justify-center font-semibold bg-blue-500 text-white py-3 px-5 w-52 hover:bg-blue-700 '>Search</button>
          </form>

    </motion.div>
    </div>

    <div className='flex flex-col w-full h-[40vh] mt-20  items-center gap-3  '>
        <div className='flex  flex-col w-[80%] mx-auto gap-6 '>
         <div className='flex flex-col items-center gap-2 '>
            <h1 className='flex text-xl sm:text-4xl font-bold mt-1 text-right '>Why Us</h1>
            <span className=' flex h-1 bg-blue-500 w-14 rounded-sm'/>
         </div>
         <p className='flex text-justify sm:text-center text-sm sm:text-base font-medium text-slate-400'>
           RODHA is the largest automobile marketplace in Sri Lanka.<br/>
           Buy and Sell vehicles in Sri Lanka's best online vehicle platform which has the largest collection of vehicles for sale.
Sri Lanka, Our little country is going through a tough time and we at Rodha wants to contribute by doing the least, keeping our platform free.
We also partner up with leading finance institutes to bring our users the best leasing offers available in Sri Lanka.
We have been connecting potential buyers with sellers since 2009 and we continue to have the best interests of our users at heart.
Post your free ad today and sell fast!
         </p>
         </div>
    </div>

     <div className='flex w-full h-[30vh] sm:h-[50vh] bg-blue-500 p-5 sm:p-10 sm:py-10 my-10 justify-center items-center'>
      <div className='flex flex-row w-full sm:w-[60%] p-5 sm:p-0 mx-auto justify-between'>

        <div className='flex flex-col gap-1 sm:gap-3 w-[8vh] sm:w-[25vh] items-center'>
          <img src={Trust} alt="Quality" className=' w-full sm:w-[60%] ' />
          <div className='flex flex-col gap-2'>
          <span className='text-center font-semibold text-xs sm:text-lg text-white'>Trusted Customers</span>
          <p className='text-[52%] sm:text-xs text-center font-medium text-slate-400'>Become one of our trusted customers today and experience seamless vehicle buying and servicing with our dedicated team.</p>
          </div>
          
        </div>

        <div className='flex flex-col gap-1 sm:gap-3 w-[8vh] sm:w-[25vh] items-center'>
          <img src={Quality} alt="Quality" className='w-full sm:w-[60%] ' />
          <div className='flex flex-col gap-2'>
          <span className='text-center font-semibold text-xs sm:text-lg text-white'>Quality Services</span>
          <p className='text-[52%] sm:text-xs text-center font-medium text-slate-400'>Experience excellence with our quality service. From vehicle inspections to maintenance, our skilled team ensures your car receives top-notch care.</p>
          </div>
          
        </div>

        <div className='flex flex-col gap-1 sm:gap-3 w-[8vh] sm:w-[25vh] items-center'>
          <img src={Finance} alt="Quality" className=' w-full sm:w-[60%] ' />
          <div className='flex flex-col gap-2'>
          <span className='text-center font-semibold text-xs sm:text-lg text-white'>Finance Options</span>
          <p className=' text-[52%] sm:text-xs text-center font-medium text-slate-400'>Unlock flexible financing solutions tailored to your needs. Our dedicated finance team ensures a seamless and stress-free process.</p>
          </div>
          
        </div>
      </div>
     </div>
    </>




  )
}

export default Home