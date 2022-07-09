const mongoose = require ('mongoose');
const { stringify } = require('querystring');

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
    }

})
module.exports = mongoose.model('Task',taskSchema)