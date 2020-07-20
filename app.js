require('dotenv').config();
const fs = require('fs');
const watch = require('node-watch');
const mailer = require('./src/mailer');

function initSender() {
  const mailerConfig = {
    username: process.env.SENDER_NAME, 
    key: process.env.SENDER_API_KEY,
  };

  mailer.init(mailerConfig);
}

function initWatcher() {
  watch(process.env.SOURCE, { recursive: true }, function(evt, name) {
    const html = fs.readFileSync(name, 'utf8');
    
    mailer.send({
      html,
      recipient: process.env.EMAIL_RECIPIENT,
    });
  });
}

function init() {
  initSender();
  initWatcher();
}

init();