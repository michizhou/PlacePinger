const accountSid = 'AC40b1c97027706d31c345a9f2bd800768';
const authToken = '7bb80fc990a84e660c7670f5ae29afd1';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+15878406018',
        from: '+14167208996',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    })
    .then(message => console.log(message.sid));