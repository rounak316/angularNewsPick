'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //     user: 'gmail.user@gmail.com',
    //     pass: 'yourpass'
    // }

host: 'nmailer.indiatimes.com' ,
port: '25',

proxy: 'http://192.168.42.76:3128/' 

});

// setup email data with unicode symbols
let mailOptions = {
    from: 'prakhar.agnihotri@timesinternet.in', // sender address
    to: 'prakhar.agnihotri@timesinternet.in', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
