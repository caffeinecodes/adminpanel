const twilio = require('twilio');
const Promise = require('bluebird');
const accountSid = 'AC8491d01f74f6ec0ccc8fbbb479475d42';
const authToken = '503ac281258ac012f5b9b0025192851f';
const client = require('twilio')(accountSid, authToken);

const sendMessage = (body, to, from) => {
    console.log('.......................twillio starts...............',body, to, from);
    return new Promise((resolve, reject) => {

        client.messages.create({
            body: body,
            to: '+91'+to,
            from: '+17752047987'
        }).then((result) => {
            console.log('............message sent....');
            resolve(result)
        }).catch((err) => {
            console.log('.......................message not sent.........', err);
            reject(err);
        });
    });
}


module.exports = {
    sendMessage
};