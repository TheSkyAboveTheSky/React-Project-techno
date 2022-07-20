const mongoose = require('mongoose')


const ticketSchema = new mongoose.Schema({
    title: String,
    details: String,
    userName: String,
    date: Date,
    department: String,
    numberOfReplies: Number,
    Priority: String,
    Product: String,
    agent:String,
    replyIdList:Array
})

const Ticket = mongoose.model('model',ticketSchema);

module.exports = Ticket;