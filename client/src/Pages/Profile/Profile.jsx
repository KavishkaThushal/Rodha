import React, { useEffect, useRef, useState } from 'react'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import User from '../../assets/images/user.png'
import {app} from '../../firebase/firebase'
import {useSelector} from 'react-redux'
function Profile() {
  const fileRef=useRef(null)
  const [file,setFile]=useState(undefined)
  const {user}=useSelector(state=>state.user)
  const [filePrecentage,setFilePrecentage]=useState(0)
  const [fileUploadError,setFileUploadError]=useState(false)
  const [avatar,setAvatar]=useState('')
 
  useEffect(()=>{

    if(file){
      handleUploadFile(file)
    }
  },[file])

  const handleUploadFile=(file)=>{
    const storage=getStorage(app)
    const fileName= new Date().getTime()+file.name
    const storageRef=ref(storage,fileName)
    const uploadTask=uploadBytesResumable(storageRef,file)

    uploadTask.on('state_changed',(snapshot)=>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      setFilePrecentage(Math.round(progress))
    },

    (error)=>{
     
      setFileUploadError(true)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        console.log('File available at',downloadURL)
        setAvatar(downloadURL)
      })
    }
  );

  }

  return (
    <div className='flex w-full justify-center items-center mb-20 sm:mb-0 h-[55vh] sm:h-[100vh] ' >
      <div className='flex flex-col p-5 w-[70%] sm:w-[30%] h-[50vh] sm:h-[90vh] gap-4 sm:gap-10  justify-center rounded-md  bg-blue-200' >
        <div className='flex flex-col items-center '>
          
        <h1 className='font-medium text-lg sm:text-2xl text-white'>Profile</h1>
          <p className='font-semibold  text-xs text-center text-slate-400'>You can edit the details.</p>
        </div>
        <div className='flex rounded-full mx-auto bg-slate-500 w-[10vh] sm:w-[20vh] h-[10vh] sm:h-[20vh] items-center'>
        <input type='file' className='hidden' accept='image/*' ref={fileRef} onChange={(e)=>setFile(e.target.files[0])}/> 
            <img src={avatar || user.photo} alt="user" className='w-[10vh] sm:w-[20vh] h-[10vh] sm:h-[20vh] rounded-full hover:cursor-pointer' onClick={()=>fileRef.current.click()}/>
        </div>
        {
  fileUploadError ? (
    <span className='text-red-700 text-center'>Image upload error</span>
  ) : (
    filePrecentage > 0 && filePrecentage < 100 ? (
      <span className='text-green-700  text-center'>{filePrecentage}%</span>
    ) : (
      <span className='text-green-700  text-center'>Image uploaded successfully</span>
    )
  )
}

        <div>
          <form className='flex flex-col gap-2 justify-center items-center w-full'>
            <input type="text" className='flex px-2 py-1 rounded-md text-xs h-8 w-[22vh] sm:w-full border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            <input type="text" className='flex px-2 py-1 rounded-md text-xs h-8 w-[22vh] sm:w-full border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            <input type="text" placeholder='password' className='flex px-2 py-1 rounded-md text-xs h-8 w-[22vh] sm:w-full border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            <button className='flex px-2 py-2 justify-center items-center font-semibold text-white bg-blue-500 rounded-md text-sm w-[22vh] sm:w-full focus:outline-none hover:bg-blue-700'>Update</button>
            <button className='flex px-2 py-2 justify-center items-center font-semibold text-white bg-blue-500 rounded-md text-sm w-[22vh] sm:w-full focus:outline-none hover:bg-blue-700'>Create Listing</button>
            <div className='flex flex-row justify-between w-full'>
              <button className='flex font-semibold text-sm text-red-800'>Delete account</button>
              <button className='flex font-semibold text-sm text-red-800'>Sign out</button>
            </div>
            <span className='text-center font-semibold text-green-800'>show listing</span>
          </form>
          
        </div>
      </div>

    </div>
  )
}

export default Profile