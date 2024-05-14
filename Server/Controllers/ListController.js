import List from "../Model/ListModel.js"


export const listController=async(req,res)=>{
    if(req.user.userId !== req.params.id)return res.status(403).json({message:"You can update only your account.",success:false
    ,})
    try {
        const newList=await List.create(req.body)
        return res.status(200).json({message:"New list added successfully.",success:true,data:newList})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error."})
    }
}

export const showListController=async(req,res)=>{
    if(req.user.userId !== req.params.id)return res.status(403).json({message:"Please sign in or sign up",success:false
    ,})
    try {
        const list=await List.find({UserRef:req.params.id})
        return res.status(200).json({message:"List fetched successfully.",success:true,data:list})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error."})
    }
}
export const removeListController=async(req,res)=>{
     try {
        const removeList=await List.findByIdAndDelete(req.params.id)
        
        return res.status(200).json({message:"List removed successfully.",success:true,data:removeList})
     } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error."})
     }
}

export const showAll=async(req,res)=>{
    try {
        const allLists=await List.find()
        return res.status(200).json({message:"Lists fetch successfully.",success:true,data:allLists})
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error."})
    }
}
export const showDetails=async(req,res)=>{
    try {
        const itemDetails=await List.findById(req.params.id)
        return res.status(200).json({message:"List fetch successfully.",success:true,data:itemDetails})
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error."})
    }
}