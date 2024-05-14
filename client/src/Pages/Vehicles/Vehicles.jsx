import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import axios from 'axios'

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
    <div className='flex flex-row w-full '>
      <span className='flex flexcol w-[30%] bg-slate-400'>

      </span>
      <div className='flex bg-red-600 w-full'>
      <div className='grid grid-cols-2 gap-4 m-5 ' >
      {
        data && data.map((card,i)=>(<Card key={i} data={card}/>))
      }
    
    
    </div>
      </div>
      
    </div>
    
    
    </>
  )
}

export default Vehicles