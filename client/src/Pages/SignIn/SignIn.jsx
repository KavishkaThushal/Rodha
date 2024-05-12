import React from 'react'
import BB from '../../assets/images/bb.png'
import Road2D from '../../assets/images/otherroad.jpeg'
import google from '../../assets/images/google.png'
import {motion} from 'framer-motion' 
import {useNavigate,Link} from 'react-router-dom'
function SignIn() {
      //  const [name, setName] = useState('')
      //  const [email, setEmail] = useState('')
      //  const [password, setPassword] = useState('')
       const navigate = useNavigate()
  return (
    <div className='flex w-full justify-center items-center mb-20 sm:mb-0 h-[55vh] sm:h-[100vh] bg-blue-500' style={{ backgroundImage: `url(${Road2D})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex  flex-row w-[80%] sm:w-[60%] h-[50vh] sm:h-[70vh] bg-white rounded-lg'>

      
      <div className='flex  flex-1 flex-col p-3  gap-4 sm:gap-10  justify-center rounded-md  bg-white' >
        <div className='flex flex-col items-center '>
          <h1 className='font-medium text-lg sm:text-2xl'>Welcome</h1>
          <p className='font-semibold  text-xs text-center text-slate-400'>Please enter your details.</p>
          </div>
          <form className='flex flex-col gap-2 justify-center items-center w-full'>
            
            <div  className='flex flex-col gap-1'>
              <label for="email" className='font-medium text-xs'>Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required className='flex px-2 py-1 rounded-md text-xs h-8 w-[30vh] sm:w-[35vh] border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            </div>
            <div  className='flex flex-col gap-1'>
              <label for="password" className='font-medium text-xs'>Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required className='flex px-2 py-1 rounded-md text-xs h-8 w-[30vh] sm:w-[35vh] border-2 border-blue-200 focus:outline-none hover:scale-105 transition-all'/>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
            <button type="submit" className='flex px-2 py-2 justify-center items-center font-semibold text-white bg-blue-500 rounded-md text-sm w-[30vh] sm:w-[35vh] focus:outline-none hover:bg-blue-700'>Sign in</button>
            <button type="submit" className='flex px-2 flex-row gap-2 py-2 justify-center items-center font-semibold text-black border-2 border-blue-500  rounded-md text-sm [30vh] sm:w-[35vh] focus:outline-none hover:bg-blue-200'>
              <img src={google} alt="google" className='w-5 h-5'/>
              Continue with Google</button>
            </div>
            
          </form>
          <span className='flex text-xs  justify-center gap-1'>Don't have an account<Link to='/signup' className='flex text-xs font-semibold text-blue-500'>Sign up</Link></span>
          
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

export default SignIn