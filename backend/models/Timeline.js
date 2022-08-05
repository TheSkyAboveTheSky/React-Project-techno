const mongoose = require('mongoose')


const timelineSchema = new mongoose.Schema({
    body : String ,
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    type : {
        type : Number,
        enum : [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
    }
},{timestamps: true})

const Timeline = mongoose.model('Timeline',timelineSchema);

module.exports = Timeline;