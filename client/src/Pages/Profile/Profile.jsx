import React from 'react'
import User from '../../assets/images/user.png'
function Profile() {
  return (
    <div className='flex w-full justify-center items-center mb-20 sm:mb-0 h-[55vh] sm:h-[100vh] ' >
      <div className='flex flex-col p-5 w-[70%] sm:w-[30%] h-[50vh] sm:h-[90vh] gap-4 sm:gap-10  justify-center rounded-md  bg-blue-200' >
        <div className='flex flex-col items-center '>
        <h1 className='font-medium text-lg sm:text-2xl text-white'>Profile</h1>
          <p className='font-semibold  text-xs text-center text-slate-400'>You can edit the details.</p>
        </div>
        <div className='flex rounded-full mx-auto bg-slate-500 w-[10vh] sm:w-[20vh] h-[10vh] sm:h-[20vh] items-center'>
            <img src={User} alt="user" className='w-full h-full rounded-full'/>
        </div>
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