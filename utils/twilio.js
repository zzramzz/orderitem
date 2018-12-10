const config = require('../config')
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = async function sms(name, token, phone) {
      return client.messages
            .create({
                  body: `Hello there! ${name}.. your Token is ${token}`,
                  from: '+13252214607',
                  to: `+${phone}`
            })
            .then(message => { console.log(message.sid); return message.sid })
            .catch(err => { return err })
}


// .
// 
