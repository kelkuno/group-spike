const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config(); // needed when hiding keys to apis.
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();



router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  const recipient = req.body.email;
  const message = req.body.notes;

  const msg = {
    to: recipient,
    from: 'ilcsdevs@gmail.com',
    subject: 'Hello world',
    text: message,
    // html: '<p>Hello HTML world!</p>',
  };

  sgMail
    .send(msg)
    .then((response)=> console.log('email sent'))
    .catch((error)=> console.log(error.message));
      
});

module.exports = router;
