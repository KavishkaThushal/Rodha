import User from '../Model/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export const Signup = async(req, res) => {
    const {name,email,password} = req.body;

    try {
        const hashedPassword =  bcrypt.hashSync(password, 10);
        const user= new User({
            UserName:name,
            email,
            password:hashedPassword
        });
        await user.save();
        
        const {password:secret,...data} = user._doc;
        const token = jwt.sign({ userId: user._id}, process.env.SECRETKEY);
        return res.cookie('access_token',token,{httpOnly:true}).status(201).send({token,data:data,success:true,message:"User Created Successfully"})
      
           
    } catch (error) {
      
      if (error.code === 11000) {
          return res.status(500).json({ message: 'Email already exists', success: false });
      }
      res.status(500).json({ message: 'Internal Server Error', success: false });
  }

}


export const Signin=async (req,res)=>{
    try {
      const {email,password}=req.body
      
      const validUser=await User.findOne({email})
      if(!validUser)return res.send({success:false,message:"User not found."})
  
      const validPassword=bcrypt.compareSync(password,validUser.password)
      if(!validPassword)return res.send({success:false,message:"Incorrect Password."})
      if(validUser && validPassword){
        const {password:secret,...data} = validUser._doc;
        const token = jwt.sign({ userId: validUser._id}, process.env.SECRETKEY);
        return res.cookie('access_token',token,{httpOnly:true}).status(200).send({token,data:data,success:true,message:"signin successfull."})
      }
      
      
    } catch (error) {
      
      return res.send({success:false,message:"Server Error."})
    }
  }



export const GoogleAuth=async (req,res)=>{
    try {
      const {name,email,photo}=req.body
      
      const validUser=await User.findOne({email})
       
      if(validUser){
        const {password:secret,...data} = validUser._doc;
        const token = jwt.sign({ userId: validUser._id}, process.env.SECRETKEY);
        return res.cookie('access_token',token,{httpOnly:true}).status(200).send({token,data:data,success:true,message:"signin successfull."})
        }else{
          const password=Math.random().toString(36).slice(-8);
          const hashedPassword =  bcrypt.hashSync(password, 10);
          const user= new User({
              UserName:name,
              email,
              password:hashedPassword,
              photo
          });
          await user.save();

          const {password:secret,...data} = user._doc;
          const token = jwt.sign({ userId: user._id}, process.env.SECRETKEY);
          return res.cookie('access_token',token,{httpOnly:true}).status(200).send({token,data:data,success:true,message:"signin successfull."})
          
        }
       }catch (error) {
      
      return res.send({success:false,message:"Server Error."})
    }
  }
