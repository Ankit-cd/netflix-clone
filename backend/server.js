import express from 'express';
import dotenv from 'dotenv';
import { ENV_VARS } from './config/envVars.js';

import authRoute from './routes/authRoute.js';
import movieRoutes from './routes/movieRoutes.js';
import tvRoutes from './routes/tvRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import { connectDB } from './config/dB.js';
import { protectRoute } from './middleware/protectRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

const PORT = ENV_VARS.PORT;
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/movie',protectRoute,movieRoutes);
app.use('/api/v1/tv',protectRoute,tvRoutes);
app.use('/api/v1/search',protectRoute,searchRoutes);

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    connectDB();
});







