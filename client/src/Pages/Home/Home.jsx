import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import VanImg from '../../assets/images/wogsevagon.jpeg'
import {motion} from 'framer-motion'
function Home() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  // Function to handle changes in the dropdown selection
  const handleSelectChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleSelectChangeType = (event) => {
    setSelectedType(event.target.value);
  };
  const handleSelectChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };
  const handleSelectChangePrice = (event) => {
    setSelectedPrice(event.target.value);
  };
  const handleSelectChangeCondition = (event) => {
    setSelectedCondition(event.target.value);
  };
  const handleSelectChangeModel = (event) => {
    setSelectedModel(event.target.value);
  };
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

          <div className='flex flex-col w-full p-5 sm:p-0 sm:w-[80%]  items-center gap-4 sm:gap-8 mt-1 sm:mt-5'>

          <div className='flex flex-row w-full justify-between '> 
          <select id="dropdown" value={selectedBrand} onChange={handleSelectChange} className='flex text-center  py-3 w-32  sm:w-64 h-12 font-semibold focus:outline-none text-slate-400'>
        <option value="" disabled hidden className='px-10 font-bold'>Brand</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
            
            <div className='flex flex-col gap-2 '>
           <input type="text" value={selectedModel} placeholder='Model' onChange={handleSelectChangeModel} className='flex px-2 py-3 w-32 sm:w-64 h-12  font-semibold text-center focus:outline-none'/>
           <span className='flex  font-semibold text-xs justify-center '>Ex: Corolla</span>
           </div>

           <select id="dropdown" value={selectedType} onChange={handleSelectChangeType} className='flex text-center  py-3 w-32 sm:w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" disabled hidden>Type</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          </div>

          <div className='flex flex-row w-full justify-between '>
          <select id="dropdown" value={selectedPrice} onChange={handleSelectChangePrice} className='flex text-center  py-3 w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" disabled hidden>Price</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <select id="dropdown" value={selectedCity} onChange={handleSelectChangeCity} className='flex text-center  py-3 w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" disabled hidden>City</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

           

           <select id="dropdown" value={selectedCondition} onChange={handleSelectChangeCondition} className='flex text-center  py-3 w-64 h-12  font-semibold focus:outline-none text-slate-400'>
        <option value="" disabled hidden>Condition</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          </div>
           
           <button className='flex items-center justify-center font-semibold bg-blue-500 text-white py-3 px-5 w-52 hover:bg-blue-700 '>Search</button>
          </div>

    </motion.div>
    </div>
    </>
  )
}

export default Home