const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();


const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'email and password are required.' });
    const foundUser = await User.find({ email: email });
    if (!foundUser) {
        console.log('User not found');
        return res.sendStatus(401); //Unauthorized 
    }
    // evaluate password 
    try {
        const match = await bcrypt.compareSync(password + process.env.PEPPER, foundUser[0].password);
        if (match) {
            const roles = Object.values(foundUser[0].roles);
            const message = "success";
            // create JWTs
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "email": foundUser[0].email,
                        "roles": roles
                    }
                },
                process.env.TOKEN_SECRET,
            );
            // set cookies
            res.cookie('jwt', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
            res.json({ accessToken, roles , message });
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //Unauthorized
    }
    
}

module.exports = { handleLogin };