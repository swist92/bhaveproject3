// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // const sendGrid = require('sendGrid/mail');

// const sgMail = require('@sendgrid/mail');

// const app = express();

// app.use(bodyParser.json());

// app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });


// app.get('/contact', (req, res, next) => {
//     res.send('API Status: Running')
// });


// app.post('/api/email', (req, res, next) => {

//     sgMail.setApiKey('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');
//     const msg = {
//         to: 'bhavebkind@gmail.com',
//         from: req.body.email,
//         subject: 'Website Contact',
//         text: req.body.message
//     }

//     sgMail.send(msg)
//         .then(result => {

//             res.status(200).json({
//                 success: true
//             });

//         })
//         .catch(err => {

//             console.log('error: ', err);
//             res.status(401).json({
//                 success: false
//             });

//         });



//     app.listen(3000, '0.0.0.0');