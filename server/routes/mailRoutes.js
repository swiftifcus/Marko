const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log('users readto to mail myself');
  }
});

router.get('/', (req, res, next) => {
  let mail = {
    from: 'Marko Ilic',
    to: process.env.EMAIL,
    subject: 'Marko Ilic contact mail received!',
    html: `
      <p style="font-size: 20px">From: ${req.query.name} </p>
      <p style="font-size: 20px">Email: ${req.query.email} </p>
      <p style="font-size: 20px">Phone Number: ${req.query.phone} </p>
      <p style="font-size: 20px">Message: ${req.query.message} </p>
    `,
  };

  transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: 'success' });
    }
  });

  mail = {
    from: 'Marko Ilic',
    to: req.query.email,
    subject: 'We have received your message!',
    html: `
      <p>Thank you for your trust!</p>
    `,
  };

  transporter.sendMail(mail);
});

module.exports = router;
