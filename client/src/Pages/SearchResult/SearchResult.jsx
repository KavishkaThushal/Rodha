import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import axios from 'axios'
import video from '../../assets/hero.mp4'
function SearchResult() {
    const [data,setData]=useState("")
    const [searchData,setSearchData]=useState({})
     useEffect(()=>{
         const fetchURL=()=>{
          const queryParams = new URLSearchParams(window.location.search);

          const brand = queryParams.get('Brand');
          const model = queryParams.get('Model');
          const type = queryParams.get('Type');
          const price = queryParams.get('Price');
          const city = queryParams.get('City');
          const condition = queryParams.get('Condition');
          setSearchData({brand, model, type, price, city, condition})
     
          
         }
         fetchURL()
     },[])
   
    

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
    
    <div className='grid grid-cols-3 gap-4 my-10 mx-10  '>
      {
        searchData.model===null && searchData.type===null? (data && data.filter((item)=>(item.Brand.toLowerCase().includes(searchData.brand?.toLowerCase()))).map((card,i)=>(<Card key={i} data={card}/>))) :
       (searchData && data && data.filter((item)=>(item.Brand.toLowerCase().includes(searchData.brand?.toLowerCase()) && 
       ( item.Model.toLowerCase().includes(searchData.model?.toLowerCase()) && item.Type.toLowerCase().includes(searchData.type?.toLowerCase())  && item.District.toLowerCase().includes(searchData.city?.toLowerCase()) && item.Condition.toLowerCase().includes(searchData.condition?.toLowerCase())))).map((card,i)=>(<Card key={i} data={card}/>)))
      }
    
    
    </div>
    </div>
    
    
    </>
  )
}

export default SearchResult