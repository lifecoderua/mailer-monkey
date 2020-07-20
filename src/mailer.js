const mailgun = require('mailgun.js');
const mailer = {};

let client = null

module.exports = mailer;

mailer.init = (mailerConfig) => {
  client = mailgun.client(mailerConfig);
}

mailer.send = (domain, mailParams) => {
  console.log('Sending email...');

  client.messages
    .create(domain, mailParams)
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error

  console.log('SENT!');
}