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


const Reply = mongoose.model('replies',mongoose.Schema({
    userName:String,
    location:String,
    date:Date,
    title:String,
    content:String,
    loves: Number,
    comments:Number
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


const getTicket = (id,done) => {
    Ticket.findById(id,(err,data) => {
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


const postReply = (data,done) => {
    const reply = new Reply(data)
    reply.save((err,data) => {
        if(err)
        {
            console.log("Error saving data to database from database client")
            done(err)
        }
        else
        {
            done(null,data)
        }
    })
}

module.exports ={ getTickets, getTicket, postReply}