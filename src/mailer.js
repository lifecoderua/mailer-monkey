const mailgun = require('mailgun.js');
const mailer = {};

let client = null

module.exports = mailer;

mailer.init = (mailerConfig) => {
  client = mailgun.client(mailerConfig);
}

mailer.send = ({html, recipient}) => {
  console.log('To Send', html);
}