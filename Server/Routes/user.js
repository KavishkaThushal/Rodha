import express from 'express'
import { VerifyToken } from '../utils/Verify.js'
import { deleteAccount, updateUser } from '../Controllers/userControllert.js'

const router=express.Router()

router.post('/update/:id',VerifyToken,updateUser)
router.post('/delete/:id',VerifyToken,deleteAccount)

export {router as userControll}