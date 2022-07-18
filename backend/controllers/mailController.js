const nodemailer = require('nodemailer');


const sendMail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'adhamahmeds2312@gmail.com',
            pass: 'klracachqkxvgiqe'
        }
    });
    const mailOptions = {
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
}

module.exports = { sendMail };
