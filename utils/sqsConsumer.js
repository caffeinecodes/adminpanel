// Require objects.
let express = require('express');
let app = express();
let AWS = require('aws-sdk');
require('dotenv').config();
let queueUrl = " ";
const Consumer = require('sqs-consumer');

//aws.config.loadFromPath(__dirname + '/config.json');

AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});
let sqs = new aws.SQS();


const appConsumer = Consumer.create({
    queueUrl: process.env.queueUrl,
    handleMessage: (message, done) => {
        // do some work with `message`
        console.log(message);
        done();
    },
    sqs: new AWS.SQS()
});

const appConsumerConnect = (params, callback) => {
    appConsumer.on(params, (err, data) => {
        console.log("-...........................", err, data);
        if (err) callback(err);
        else callback(null, data);
    });
};

const appConsumerConnectStart = (callback) => {
    appConsumer.start((err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    });
};


module.exports = {
    appConsumer,
    appConsumerConnect,
    appConsumerConnectStart
};

