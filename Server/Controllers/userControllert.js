import User from "../Model/UserModel.js"

export const updateUser=async(req,res)=>{
    
    if(req.user.userId !== req.params.id)return res.status(403).json({message:"You can update only your account."})
  
        try {
            if(req.body.password){
                req.body.password=bcrypt.hashSync(req.body.password,10)
            }
        
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:{
                    UserName:req.body.formData.name,
                    email:req.body.formData.email,
                    password:req.body.formData.password,
                    photo:req.body.formData.photo
                }
            
            },{new:true})
            const {password:secret,...data}=updatedUser._doc

            return res.status(200).json({message:"User updated successfully.",success:true,data:data})
                
        } catch (error) {
         
            return res.status(500).json({message:"Internal Server Error."})
        }
   
}

export const deleteAccount=async(req,res)=>{
    if(req.user.userId !== req.params.id)return res.status(403).json({message:"You can update only your account."})

        try {
            const deleteUser=await User.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Account deleted successfully.",success:true})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error."})
        }
}