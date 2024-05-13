import express from 'express'
import { VerifyToken } from '../utils/Verify.js'
import { updateUser } from '../Controllers/userControllert.js'

const router=express.Router()

router.post('/update/:id',VerifyToken,updateUser)

export {router as userControll}