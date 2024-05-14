import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import axios from 'axios'
import video from '../../assets/hero.mp4'
function Vehicles() {
    const [data,setData]=useState("")
    

   useEffect(()=>{
      const fetchData=async()=>{
        try {
          const response=await axios.get('http://localhost:8000/api/list/alllists')
          if(response.data.success===true){
            setData(response.data.data)
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()

   },[])
  
  return (
    <>
    <div className='flex flex-col w-full  items-center '>
      <div className='flex w-full h-[40vh] bg-slate-500'>
      <video className= " w-full h-full object-cover opacity-40" src={video} muted autoPlay loop type="video/mp4"/>
      <h1 className='absolute top-40 right-[54vh] z-50 text-4xl font-semibold'>SRI LANKAN BIGGEST VEHICLE MARKET</h1>
      </div>
    
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-10 mx-10  '>
      {
       
        data && data.map((card,i)=>(<Card key={i} data={card}/>))
      }
    
    
    </div>
    </div>
    
    
    </>
  )
}

export default Vehicles