const Uploader = require('s3-image-uploader');
const express = require('express');
const config = require('./../config.js');
const Promise = require('bluebird');

const uploader = new Uploader({
    aws: {
        key: "",
        secret: ""
    },
    websockets: false
});


exports.fileUpload = fileName => new Promise((resolve, reject) => {
    console.log(`file name is ${fileName}`);
    uploader.upload({
            fileId: 'someUniqueIdentifier',
            bucket: 'quflip',
            source: `/home/bitnami/quflipNodeAPI/public/images/${fileName}`,
            name: fileName
        },
        data => { // success
            console.log("success uploading");
            resolve(true);
        },
        (errMsg, errObject) => { //error
            console.log(`failure uploading${errMsg}`);
            console.log(`error object  ${errObject}`);
            reject(false);
        });
});