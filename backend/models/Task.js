const mongoose = require ('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    priority: {
        type  : String,
        required : true
    },
    team: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    due : {
        type : Date,
        required : true
    },
    avatar: {
        type : String,
    }

})
module.exports = mongoose.model('Task',taskSchema)