const accountSid = 'AC51404c4fd5b7ea184f5e61fcbd8511ac';
const authToken = '4ac712f2e1e02f01628dd8fee20061f1';
const client = require('twilio')(accountSid, authToken);


client.messages
      .create({
         body: 'Hello there!',
         from: '+13252214607',
         mediaUrl: 'https://demo.twilio.com/owl.png',
         to: '+9779860329221'
       })
      .then(message => console.log(message.sid))
      .done();