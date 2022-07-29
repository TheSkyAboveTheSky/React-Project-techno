const mongoose = require('mongoose')


const timelineSchema = new mongoose.Schema({
    body : String ,
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},{timestamps: true})

const Timeline = mongoose.model('Timeline',timelineSchema);

module.exports = Timeline;