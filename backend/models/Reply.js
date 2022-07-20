const mongoose = require('mongoose')


const replySchema = new mongoose.Schema({
    title: String,
    userName: String,
    content:String,
    loves:Number,
    comments:Number,
    location: String,
    date: Date
})

const Reply = mongoose.model('Reply',replySchema);

module.exports = Reply;