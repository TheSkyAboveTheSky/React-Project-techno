const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.getAllUsers = (req, res) => {
    User.find().sort({ date: -1 }).then(users => { res.json(users) }).catch(err => { res.json(err) });
}

module.exports.getUser = (req, res) => {
    User.findById(req.params.id).then(user => { res.json(user) }).catch(err => { res.json(err) });
}

module.exports.createUser = (req, res) => {

    const newUser = new User({
        username: req.body.username,
        roles: req.body.roles,
        email: (req.body.email).split('@')[0] + '@technocolabs.com',
        password: bcrypt.hashSync(req.body.password + process.env.TOKEN_SECRET, parseInt(10)),
    });

    newUser.save().then(user => { res.json(user) }).catch(err => { res.json(err) });
}

module.exports.updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.sendStatus(404);
    user.roles = req.body.roles;
    user.save().then(user => { res.json(user) }).catch(err => { res.json(err) });
}


module.exports.getUserRoles = (req, res) => {
    User.findById(req.params.id).then(user => { res.json(user.roles) }).catch(err => { res.json(err) });
}

module.exports.getFriends = (req, res) => {
    User.find({ _id: { $nin: [req.params.id] } })
        .then(users => { res.json(users) }
        ).catch(err => { res.json(err) });
}
