const accountSid = 'AC51404c4fd5b7ea184f5e61fcbd8511ac';
const authToken = '4ac712f2e1e02f01628dd8fee20061f1';
const client = require('twilio')(accountSid, authToken);


module.exports = function sms(name,token,phone){
    return client.messages
      .create({
         body: `Hello there! ${name}.. your Token is ${token}` ,
         from: '+13252214607',
         to: `+${phone}`
       })
      .then(message => {console.log(message.sid,'tnt')})
      .catch(err=>{return err.status})
}

// .
// 
