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