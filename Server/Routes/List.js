import express from 'express'
import { listController } from '../Controllers/ListController.js'
import { VerifyToken } from '../utils/Verify.js'

const router=express.Router()

router.post('/create',VerifyToken,listController)

export {router as listControll}