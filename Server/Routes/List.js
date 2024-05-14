import express from 'express'
import { listController, removeListController, showAll, showDetails, showListController } from '../Controllers/ListController.js'
import { VerifyToken } from '../utils/Verify.js'

const router=express.Router()

router.post('/create/:id',VerifyToken,listController)
router.post('/showlist/:id',VerifyToken,showListController)
router.post('/deletelist/:id',removeListController)
router.get('/alllists',showAll)
router.get('/listdetails/:id',showDetails)

export {router as listControll}