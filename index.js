import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';

import authRouter from './routes/auth.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('connected to MogoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});