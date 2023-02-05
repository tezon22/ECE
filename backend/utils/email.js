const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // create a transporter
  const transporter = nodemailer.createTransport({
   host: process.env.EMAIL_HOST,
   port: process.env.EMAIL_PORT,
   secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
    // activate the "less secure app" option
  })
  // define the email options
  const mailOptions = {
    from : 'TezonTeam <tezonteam@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html : 
  }
  // actually send the email with nodemailer
  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;