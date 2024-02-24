import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';
import cors from 'cors';
// import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'


import authRouter from './routes/auth.routes.js';
import productRouter from './routes/product.routes.js';
import messageRouter from './routes/message.Routes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('connected to MogoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cookieParser())


// Enable cors at the server side. 

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));




// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:8000");
//     res.header('Access-Control-Allow-Headers', true);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

//static Images Folder

app.use('/Images', express.static('./Images'))

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/message', messageRouter);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`serve at https://localhost:${port}`)
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