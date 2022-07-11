const mongoose = require ('mongoose');

const teamsSchema = new mongoose.Schema({
    avatar: {
        type : String,
        required : true
    },
})
module.exports = mongoose.model('Teams',teamsSchema)