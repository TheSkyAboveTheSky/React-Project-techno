const mongoose = require ('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.ATLAS_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)

    }catch (error) {
        console.log(error)
        console.log("In here")
    }
}

module.exports = connectDB