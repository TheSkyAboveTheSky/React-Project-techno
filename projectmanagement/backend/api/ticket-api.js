require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI,{},(res) => {
    if(res)
    {
        console.log("Mongodb not connected... "+ res)
    }
    else
    {
        console.log("Mongodb connected...")
    }
})

const Ticket = mongoose.model('tickets',mongoose.Schema({
    title: String,
    userName: String,
    department: String
}))

const getTickets = (done) => {
    Ticket.find({}).select('_id').exec((err,data) => {
        if(err)
        {
            done(err)
        }
        else
        {
            done(null,data)
        }
    })    
}


module.exports ={ getTickets}