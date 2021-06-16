const path = require('path');
const express = require('express'); //adding express library
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json()); //Set up JSON parser to handle form data which will be sent as JSON in post req
app.use(express.static(buildPath)); //Tell express to serve all files from 'build' folder

//Create post request handler for /send endpoint - to be executed from React app
app.post('/send', (req, res) => {
    try {
        const mailOptions = {
            from: req.body.email,
            to: process.env.email,
            subject: req.body.subject,
            html: `
    <p>You have a new contact request</p>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.name}</li>
      <li>Subject: ${req.body.name}</li>
      <li>Message: ${req.body.name}</li>
    </ul>
    `
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            } else {
                res.send({
                    success: true,
                    message: 'Thanks for contacting me. Please give me some time to get back to you shortly :)'
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        });
    }
});


//Starting express server to listen to our requests on Port 3030
app.listen(3030, () => {
    console.log('server start on port 3030');
});