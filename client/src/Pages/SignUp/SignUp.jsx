import React, { useState } from 'react'
import BB from '../../assets/images/bb.png'
import Road2D from '../../assets/images/otherroad.jpeg'
import google from '../../assets/images/google.png'
import {motion} from 'framer-motion' 
import axios from 'axios'
import { toast } from 'react-toastify'
import { signInStart,signInSuccess,signInFail } from '../../Redux/Reducer/UserReducer'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const {loading,error}=useSelector(state=>state.user)
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
        try {
          dispatch(signInStart())
           const response= await axios.post("http://localhost:8000/api/auth/signup", {
            name,
            email,
            password
               
           })
           
           if(response.data.success ===false){
              dispatch(signInFail(response.data.message))
              toast.error(error, { position: "bottom-right" });
              
            }else{
               dispatch(signInSuccess(response.data.data))
               toast.success("Register successfully", { position: "bottom-right" });
               navigate('/')
            }

        } catch (e) {
         
          dispatch(signInFail(e.response.data.message))
          toast.error(error, { position: "bottom-right" });
        }

  }

  return (
    <div className='flex w-full justify-center items-center mb-20 sm:mb-0 h-[55vh] sm:h-[100vh] bg-blue-500' style={{ backgroundImage: `url(${Road2D})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex  flex-row w-[80%] sm:w-[60%] h-[50vh] sm:h-[70vh] bg-white rounded-lg'>

      
      <div className='flex  flex-1 flex-col p-3  gap-4 sm:gap-10  justify-center rounded-md  bg-white' >
        <div className='flex flex-col items-center '>
          <h1 className='font-medium text-lg sm:text-2xl'>Create an Account</h1>
          <p className='font-semibold  text-xs text-center text-slate-400'>Please enter your details.</p>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center w-full'>
            <div className='flex flex-col gap-1'>
              <label for="username" className='font-medium text-xs'>User Name</label>
              <input type="text" id="username" name="username" placeholder="Enter your email" required onChange={(e)=>(setName(e.target.value))} className='flex px-2 py-1 rounded-md text-xs h-8 w-[30vh] sm:w-[35vh] border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all' />
            </div>
            <div  className='flex flex-col gap-1'>
              <label for="email" className='font-medium text-xs'>Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={(e)=>(setEmail(e.target.value))} className='flex px-2 py-1 rounded-md text-xs h-8 w-[30vh] sm:w-[35vh] border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            </div>
            <div  className='flex flex-col gap-1'>
              <label for="password" className='font-medium text-xs'>Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={(e)=>(setPassword(e.target.value))} className='flex px-2 py-1 rounded-md text-xs h-8 w-[30vh] sm:w-[35vh] border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
            <button type="submit" className='flex px-2 py-2 justify-center items-center font-semibold text-white bg-blue-500 rounded-md text-sm w-[30vh] sm:w-[35vh] focus:outline-none hover:bg-blue-700' onClick={handleSubmit}>{loading? "Loading":"Sign up"}</button>
            <button type="submit" className='flex px-2 flex-row gap-2 py-2 justify-center items-center font-semibold text-black border-2 border-blue-500  rounded-md text-sm [30vh] sm:w-[35vh] focus:outline-none hover:bg-blue-200'>
              <img src={google} alt="google" className='w-5 h-5'/>
              Continue with Google</button>
            </div>
            <span className='flex text-xs gap-1'>All ready have an account?<button className='flex text-xs font-semibold text-blue-500'>Sign in</button></span>
          </div>
      </div>
      <div className=' hidden sm:visible sm:flex flex-1 bg-slate-400 rounded-md'>
         <img src={Road2D} alt="road" className='object-cover w-full h-full rounded-md'/>
         < motion.img 
         initial={{y: "-10rem",x:"9rem",opacity:0.8,scale:0.2,rotateY:-60}}
         animate={{y:0,x:0,opacity:1,scale:1,rotateY:0}}
         transition={{
           duration:3,
           type:"tween"
         }}
         src={BB} alt="car" className='absolute w-[60vh] top-[70vh] right-[68vh]'/>
      </div>
    </div>
    </div>
  )
}

export default SignUp