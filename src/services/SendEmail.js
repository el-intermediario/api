const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

// Upload image.
router.get('/', function (request, response, next) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'matiastorres.dev@gmail.com',
    from: 'administracion@meatiendo.com',
    subject: 'Sending with Twilio SendGrid',
    text: 'And easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
});

module.exports = router;