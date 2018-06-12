// Require objects.
let express  = require('express');
let app      = express();
let AWS      = require('aws-sdk');
require('dotenv').config();
let queueUrl = " ";

//aws.config.loadFromPath(__dirname + '/config.json');

AWS.config.update({accessKeyId:process.env.accessKeyId, secretAccessKey: process.env.secretAccessKey, region: process.env.region});
let sqs = new aws.SQS();


const create = (params, callback) => {
    sqs.createQueue(params, (err, data) => {
        if (err) callback(err);
        else callback(null, data);
    });
};




const list = (params, callback) => {
    sqs.listQueues(params, (err, data) => {
        if (err) callback(err);
        else callback(null, data);
    });
};


const send = (params, callback) => {
    sqs.sendMessage(params, (err, data) => {
        if (err) callback(err);
        else callback(null, data);
    });
};


const receive = (params, callback) => {
    sqs.receiveMessage(params, (err, data) => {
        if (err) callback(err);
        else callback(null, data);
    });
};


const Delete = (params, callback) => {
    sqs.deleteMessage(params, (err, data) => {
        if (err) callback(err);
        else callback(null, data);
    });
};


const purge = (params, callback) => {
    sqs.purgeQueue(params, (err, data) => {
        if (err) callback(err);
        else callback(null, data);
    });
};


module.exports = {

    list,
    create,
    purge,
    Delete,
    receive,
    send

};

