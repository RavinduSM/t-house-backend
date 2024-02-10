import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';
// import bodyParser from 'body-parser';

import authRouter from './routes/auth.routes.js';
import productRouter from './routes/product.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('connected to MogoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

//static Images Folder

app.use('/Images', express.static('./Images'))

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})