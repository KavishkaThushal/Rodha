import React from 'react'

function Create() {
  return (
    <div className='flex w-full items-start sm:items-center justify-start sm:justify-center h-[103vh] sm:h-[150vh]'>
        <div className='flex flex-col  items-center sm:justify-center  gap-10 w-full sm:w-[70%] h-[80vh] sm:h-[140vh] bg-blue-200 rounded-md '>
            <h1 className='flex text-xl sm:text-3xl mt-6 sm:mt-0 font-medium'>Create your own list</h1>
            <div className='flex flex-col sm:flex-row  gap-4 sm:gap-5 w-full sm:w-[140vh] p-5 bg-blue-200 rounded-md'>
                <div className='flex flex-1 flex-col gap-2'>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>Model</label>
                <select id="dropdown"  className='flex text-center  py-2 rounded-md h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value="" disabled hidden className='px-10 font-bold'>Model</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
                </span>
                 
                 <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>Brand</label>
                <select id="dropdown"  className='flex text-center  py-2 rounded-md h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value="" disabled hidden className='px-10 font-bold'>Brand</option>
                <option value="option1">Nissan</option>
                <option value="option2">Toyota</option>
                <option value="option3">Kie</option>
                </select>
                </span>
                </span>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Details</label>
                <textarea placeholder='Description' className='flex w-full h-32 rounded-md sm:w-full sm:h-48 p-2  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                </textarea>
                </span>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Features</label>
                <input type='text' placeholder='Features' className='flex w-64 rounded-md h-12 sm:w-full p-2  focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>Gear</label>    
                <select id="dropdown"  className='flex text-center rounded-md py-2  h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value="" disabled hidden className='px-10 font-bold'>Gear</option>
                <option value="option1">Automatic</option>
                <option value="option2">Manual</option>
                </select>
                </span>

                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Fuel Type</label>
                <select id="dropdown"  className='flex text-center rounded-md py-2  h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value="" disabled hidden className='px-10 font-bold'>Fuel Type</option>
                <option value="option1">Electric</option>
                <option value="option2">Petrol</option>
                <option value="option2">Disel</option>
                </select>
                </span>
                </span>

                <span className='flex flex-col gap-2'>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Milleage</label>
                <input type='text' placeholder='Milleage' className='flex rounded-md w-64 h-12 sm:w-full p-2  focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                </span>

                <span className='flex flex-row w-full items-center justify-between'>
                <span className='flex flex-col gap-1'>
                 <label  className='font-medium text-xs'>District</label>    
                <select id="dropdown"  className='flex text-center  py-2 rounded-md h-10 w-32  sm:w-40 font-semibold  focus:outline-none text-blue-500 hover:scale-105 transition-all'>
                <option value="" disabled hidden className='px-10 font-bold'>Gear</option>
                <option value="option1">Automatic</option>
                <option value="option2">Manual</option>
                </select>
                </span>

                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Year</label>
                <input type='text' placeholder='Fuel Type' className='flex w-32 h-10 sm:w-40 p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                </span>


                

                <span className='flex flex-col gap-2 '>
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Contact</label>
                <input type='text' placeholder='Contact' className='flex w-64 h-12 sm:w-full p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                
                <span className='flex flex-col gap-1'>
                <label  className='font-medium text-xs'>Price</label>
                <input type='text' placeholder='Price' className='flex w-64 h-12 sm:w-full p-2 rounded-md focus:outline-none text-blue-500 hover:scale-105 transition-all'/>
                </span>
                </span>
                 
                </div>
                <div className='flex flex-1 flex-col gap-5 '>
                    <span className='flex gap-1 h-5 text-sm font-semibold items-center'>Images:<span className='text-xs text-slate-400 font-semibold'>The first image will be the cover(max 6) </span></span>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <div className='flex h-15 border-2 border-blue-500 px-2 py-2 rounded-md hover:scale-105 transition-all '>
                            <input type='file' className='flex' />
                        </div>
                        <button className='flex px-2 py-2 justify-center items-center font-semibold rounded-md text-white bg-blue-500  text-sm  w-[20vh] sm:w-[20vh] focus:outline-none hover:bg-blue-700'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create