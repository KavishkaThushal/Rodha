import express from 'express'
import { listController } from '../Controllers/ListController.js'
import { VerifyToken } from '../utils/Verify.js'

const router=express.Router()

router.post('/create/:id',VerifyToken,listController)

export {router as listControll}