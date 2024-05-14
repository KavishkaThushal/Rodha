import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { app } from '../../firebase/firebase'
import { toast } from 'react-toastify'
import { Brands, Districts } from '../../assets/utils/data'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [file,setFile]=useState(null)
    const {user}=useSelector(state=>state.user)
    const [filePrecentage,setFilePrecentage]=useState(0)
    const navigate=useNavigate()
    const [fileUpload,setFileUpload]=useState(false)
    const [formData,setFormData]=useState({
        imageUrls:[],
        Brand:'',
        Model:'',
        Year:'',
        Price:'',
        FuelType:'',
        Gear:'',
        Millage:'',
        District:'',
        Description:'',
        Contact:'',
        Features:'',
        Condition:'',
        Type:''

    })
    console.log(formData)
    
    const handleFileSubmit=(e)=>{
         if(file.length>0 && file.length + formData.imageUrls.length <7){
            setFileUpload(true)
            const images=[]
            for(let i=0;i<file.length;i++){
                images.push(storeImage(file[i]))
            }
            Promise.all(images).then((urls)=>{
                setFormData({...formData,imageUrls:formData.imageUrls.concat(urls)})
                setFileUpload(false)
                toast.success("Image upload sucessfull", { position: "bottom-right" });
                
            }).catch((error)=>{
                
                toast.error('Image upload failed.(2mb max per images)', { position: "bottom-right" });
            })
        }else{
            
            toast.error('Please select images.(max 6 images per listing)', { position: "bottom-right" });
        
        }
    }
    const storeImage=async(file)=>{
        return new Promise((resolve,reject)=>{
            const storage=getStorage(app)
            const fileName= new Date().getTime()+file.name
            const storageRef=ref(storage,fileName)
            const uploadTask=uploadBytesResumable(storageRef,file)
        
            uploadTask.on('state_changed',(snapshot)=>{
              const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
              setFilePrecentage(Math.round(progress))
            },
        
            (error)=>{
                reject(error)
              
            },
            ()=>{
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                resolve(downloadURL) 
              })
            }
          );
        })
    }

     const handleDeleteImage=(index)=>{
        setFormData({
            ...formData,
            imageUrls:formData.imageUrls.filter((_,i)=>(i!=index))
        })
     }

     const handleSubmitData=(e)=>{
       setFormData({
            ...formData,
            [e.target.id]:e.target.value
       })
     }     
    
     const handleSubmit=async()=>{
        try {
            const response=await axios.post(`http://localhost:8000/api/list/create/${user._id}`,
            {...formData,UserRef:user._id},
            {
               headers:{
                Authorization:localStorage.getItem('access_token')
               }
            })
            if(response.data.success=== false){
                toast.error('Error creating List', { position: "bottom-right" });
            }else{
                navigate('/')
                toast.success('List created successfully', { position: "bottom-right" });
            }
        } catch (error) {
            console.log(error)
            toast.error('Error creating List', { position: "bottom-right" });
        }
     } 

  return (
    <div className='flex w-full items-start sm:items-center justify-start sm:justify-center h-[103vh] sm:h-[180vh]'>
        <div className='flex flex-col  items-center sm:justify-center  gap-10 w-full sm:w-[70%] h-[80vh] sm:h-[160vh] bg-blue-200 rounded-md '>
            <h1 className='flex text-xl sm:text-3xl mt-6 sm:mt-0 font-medium'>Create your own list</h1>
            <div className='flex flex-col sm:flex-row  gap-4 sm:gap-5 w-full sm:w-[140vh] p-5 bg-blue-200 rounded-md'>
                <div className='flex flex-1 flex-col gap-2'>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Model</label>
                <input type='text' id='Model' onChange={handleSubmitData} placeholder='Model' className='flex w-32 h-10 sm:w-40 p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                 
                 <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>Brand</label>
                <select id="Brand" onChange={handleSubmitData} className='flex text-center  py-2 rounded-md h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value=""  className='px-10 font-bold'>Brand</option>
                {
                    Brands.map((brand,index)=>(<option key={index}  value={brand}>{brand}</option>))
                }
                </select>
                </span>
                </span>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Details</label>
                <textarea placeholder='Description' onChange={handleSubmitData} id='Description' className='flex w-full h-32 rounded-md sm:w-full sm:h-48 p-2  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                </textarea>
                </span>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Features</label>
                <input type='text' placeholder='Features' onChange={handleSubmitData} id='Features' className='flex w-64 rounded-md h-12 sm:w-full p-2  focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>Gear</label>    
                <select id="Gear"  onChange={handleSubmitData} className='flex text-center rounded-md py-2   h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value=""  className='px-10 font-bold'>Gear</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                </select>
                </span>

                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Fuel Type</label>
                <select id="FuelType" onChange={handleSubmitData} className='flex text-center rounded-md py-2  h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value=""  className='px-10 font-bold'>Fuel Type</option>
                <option value="Electric">Electric</option>
                <option value="Petrol">Petrol</option>
                <option value="Disel">Disel</option>
                </select>
                </span>
                </span>

                <span className='flex flex-col gap-2'>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Milleage</label>
                <input type='number' onChange={handleSubmitData} id='Millage' placeholder='Milleage' className='flex rounded-md w-64 h-12 sm:w-full p-2  focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                </span>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>District</label>    
                <select id="District" onChange={handleSubmitData} className='flex text-center  py-2 rounded-md h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all' >
                <option value=""   className='px-10 font-bold'>District</option>
                {
                    Districts.map((district,index)=>(<option key={index}  value={district}>{district}</option>))
                }
                
                </select>
                </span>

                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Year</label>
                <input type='number' id='Year' onChange={handleSubmitData} placeholder='Year' className='flex w-32 h-10 sm:w-40 p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                </span>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>Type</label>    
                <select id="Type"  onChange={handleSubmitData} className='flex text-center rounded-md py-2   h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value=""  className='px-10 font-bold'>Type</option>
                <option value="Van">Van</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="ThreeWheeler">ThreeWheeler</option>
                <option value="Car">Car</option>
                <option value="Lorry">Lorry</option>
                <option value="Bus">Bus</option>
                <option value="SUV">SUV</option>
                <option value="Heavy Duty">Heavy Duty</option>
                <option value="Double Cab">Double Cab</option>
                </select>
                </span>

                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Condition</label>
                <select id="Condition" onChange={handleSubmitData} className='flex text-center rounded-md py-2  h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value=""  className='px-10 font-bold'>Condition</option>
                <option value="Brand New">Brand New</option>
                <option value="Used">Used</option>
               
                </select>
                </span>
                </span>


                

                <span className='flex flex-col gap-2 '>
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Contact</label>
                <input type='text' id='Contact' onChange={handleSubmitData} placeholder='Contact' className='flex w-64 h-12 sm:w-full p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Price</label>
                <input type='number' id='Price'  onChange={handleSubmitData} placeholder='Price' className='flex w-64 h-12 sm:w-full p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                </span>
                 
                </div>
                <div className='flex flex-1 flex-col gap-5 '>
                    <span className='flex gap-1 h-5 text-sm font-semibold items-center'>Images:<span className='text-xs text-slate-400 font-semibold'>The first image will be the cover(max 6) </span></span>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <div className='flex h-15 border-2 border-blue-500 px-2 py-2 rounded-md hover:scale-105 transition-all '>
                            <input type='file' className='flex' multiple id='images' accept='images/*' onChange={(e)=>setFile(e.target.files)}/>
                        </div>
                        <button type='button' onClick={handleFileSubmit} className='flex px-2 py-2 justify-center items-center font-semibold rounded-md text-white bg-blue-500  text-sm  w-[20vh] sm:w-[20vh] focus:outline-none hover:bg-blue-700'>{fileUpload? "Uploading...":"Upload"}
</button>
                    </div>
                         <div className='flex flex-col   '>
                           {
                            formData.imageUrls.length>0 && formData.imageUrls.map((url,index)=>{
                                return(
                                    <div key={index} className='flex justify-between p-3 border items-center' >
                                <img src={url} alt='upload images'  className='w-20 h-20 rounded-lg object-contain'/>
                                <button className=' p-3 text-red-700 hover:opacity-75' onClick={()=>(handleDeleteImage(index))}>DELETE</button>
                                </div>
                                )
                                
                            })
                        }
                         </div>
                        
                      <button type='button' className='flex w-full items-center justify-center h-10 hover:bg-blue-700 transition-all font-semibold bg-blue-500 rounded-md text-white' onClick={handleSubmit}>Create List</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create