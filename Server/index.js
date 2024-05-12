import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Auth } from './Routes/Auth.js';
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
 
app.use(express.json());
app.use(cors())
mongoose.connect(process.env.MONGOURL).then(() => {
    console.log('Connected to Mongo DB');
}).catch((e) => {
    console.log('Connected to Mongo DB',e);
});

 app.use('/api/auth',Auth);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});