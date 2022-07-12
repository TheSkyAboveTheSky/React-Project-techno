const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    roles: {
        type: Object,
        default: { Employee : 4040 },
        enum: [1010, 2020, 3030, 4040],
        required: false
    },
    email: String,
    password: String
},
{collection:"TestCollection"},{timestamps: true});
module.exports = Order = mongoose.model('User',UserSchema);