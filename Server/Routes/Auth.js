import express from 'express';
import { GoogleAuth, Signin, Signup } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/signup',Signup);
router.post('/signin',Signin);
router.post('/google',GoogleAuth);

export {router as Auth}