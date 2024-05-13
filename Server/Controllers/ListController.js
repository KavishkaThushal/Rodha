import List from "../Model/ListModel.js"


export const listController=async(req,res)=>{

    try {
        const newList=await List.create(req.body)
        return res.status(200).json({message:"New list added successfully.",success:true,data:newList})
        
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error."})
    }
}