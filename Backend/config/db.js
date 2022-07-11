const mongoose = require ('mongoose')
const colors = require('colors')
const dotenv = require('dotenv').config()

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    }catch (error) {
        console.log(error)
    }
}

module.exports = connectDB