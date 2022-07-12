const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const nodemailer = require('nodemailer');
const userRouter = require('./routes/Users');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');


const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,           
    optionSuccessStatus:200
}


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.use(cookieParser());


app.use(bodyParser.json());

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.post('/send-email', function (req, res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'adhamahmeds2312@gmail.com',
            pass: 'klracachqkxvgiqe'
        }
    });
    let mailOptions =  {
        from: '"Adham Ahmed" <adhamahmeds2312@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: `<b>Your account has been created successfully with </b><b>Email: ${(req.body.to).split('@')[0] + '@technocolabs.com'}</b>` // html body
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent successfully!');
        res.sendStatus(200);
        });
        return res.end();
    });

app.use(verifyJWT);
app.use(userRouter);




app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});