const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const nodemailer = require('nodemailer');
const userRouter = require('./routes/Users');
const todoRouter = require('./routes/todo');
const connectDB = require('./config/db');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const timelineRouter = require('./routes/timelines');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,           
    optionSuccessStatus:200
}


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
connectDB();


app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/send-email', require('./routes/mail'));
app.use('/api/todo',todoRouter)
app.use('/tickets',require('./routes/tickets'))
app.use(timelineRouter);
app.use(verifyJWT);
app.use(userRouter);



app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});