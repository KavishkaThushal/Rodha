import express from 'express'
import { listController, removeListController, showListController } from '../Controllers/ListController.js'
import { VerifyToken } from '../utils/Verify.js'

const router=express.Router()

router.post('/create/:id',VerifyToken,listController)
router.post('/showlist/:id',VerifyToken,showListController)
router.post('/deletelist/:id',removeListController)

export {router as listControll}