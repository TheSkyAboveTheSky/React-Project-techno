const express = require('express');
const app = express();
const connectDB = require('./config/db');
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')

connectDB();

app.use(cors())
app.use(express.json({ extended: false })) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))   // for serving static files
app.use('/api/todo',require('./routes/todoRouter'))


app.listen(process.env.PORT, () => {
    console.log(`listening at http://localhost:${process.env.PORT}`.yellow.underline);
});