import express from 'express';
import { Signin, Signup } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/signup',Signup);
router.post('/signin',Signin);

export {router as Auth}