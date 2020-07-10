

const send_Code = Math.round(Math.random()*10000);

const sgMail = require('@sendgrid/mail');
const { model } = require('mongoose');

sgMail.setApiKey('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');

function Sending_mail(email)
{
    const msg = {
        to: 'email',
        from: 'praveengupta86012@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>${send_Code}</strong>`,
      };
      sgMail.send(msg);
      return send_Code;
}
module.exports = Sending_mail;
