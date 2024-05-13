import React from 'react'
import google from '../../assets/images/google.png'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase/firebase.js';
import axios from 'axios'
import { toast } from 'react-toastify'
import {signInSuccess,signInFail } from '../../Redux/Reducer/UserReducer'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Oauth() {
    const dispatch=useDispatch()
    const {loading,error}=useSelector(state=>state.user)
    const navigate = useNavigate()
     
       const handleGoogleOauth=async()=>{
         try {
             const provider= new GoogleAuthProvider()
             const auth=getAuth(app)

             const result=await signInWithPopup(auth,provider)

             const response= await axios.post("http://localhost:8000/api/auth/google", {
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL
             })
             if(response.data.success ===false){
                dispatch(signInFail(response.data.message))
                toast.error(error, { position: "bottom-right" });
                
              }else{
                 dispatch(signInSuccess(response.data.data))
                 localStorage.setItem('access_token',response.data.token)
                 toast.success("Register successfully", { position: "bottom-right" });
                 navigate('/')
              }
  
         } catch (e) {
            console.log(e)
              dispatch(signInFail(e.message))
              toast.error(error, { position: "bottom-right" });
         }
       }

  return (
    <button onClick={handleGoogleOauth} type="button" className='flex px-2 flex-row gap-2 py-2 justify-center items-center font-semibold text-black border-2 border-blue-500  rounded-md text-sm [30vh] sm:w-[35vh] focus:outline-none hover:bg-blue-200'>
        <img src={google} alt="google" className='w-5 h-5'/>
            Continue with Google
    </button>
  )
}

export default Oauth