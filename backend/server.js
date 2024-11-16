import express from 'express';
import dotenv from 'dotenv';
import { ENV_VARS } from './config/envVars.js';

import authRoute from './routes/authRoute.js';
import movieRoutes from './routes/movieRoutes.js';
import tvRoutes from './routes/tvRoutes.js';
import { connectDB } from './config/dB.js';

dotenv.config();

const app = express();

const PORT = ENV_VARS.PORT;
app.use(express.json())

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/movie',movieRoutes);
app.use('/api/v1/tv',tvRoutes);

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    connectDB();
});







