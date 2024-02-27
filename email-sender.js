const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

// Email details
let mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient_email@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

// Send email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
