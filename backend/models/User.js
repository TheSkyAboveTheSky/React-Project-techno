const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    roles: {
        type: Object,
        default: { UnAutourized : "0000" },
        enum: ["1010", "2020", "3030", "4040"],
        required: false
    },
    team : {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    email: String,
    password: String
},
{collection:"TestCollection"},{timestamps: true});
module.exports = Order = mongoose.model('User',userSchema);