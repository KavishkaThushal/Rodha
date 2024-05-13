import jwt from 'jsonwebtoken'

export const VerifyToken=(req,res,next)=>{
       const token=req.cookies.access_token
       
       if(!token)return res.send({success:false,message:"Unauthorized."})

         jwt.verify(token,process.env.SECRETKEY,(err,user)=>{
              if(err)return res.send({success:false,message:"Unauthorized."})
              req.user=user
            
              next()
         })
        
}