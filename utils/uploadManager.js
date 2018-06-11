const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();
const directory = './image'
const path = require('path');
AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});
const myBucket = process.env.bucketName;

const s3 = new AWS.S3();


const uploadImage = ((files, callback) => {

    fs.readFile(files.path, function (err, buffer) {
        let params = {
            Bucket: myBucket,
            Key: files.originalname,
            Body: buffer,
            ACL: 'public-read',
            ContentLength: files.size,
        };
        s3.upload(params, function (err, data) {
            if (err) {
                console.log(err);
                console.log("................err in uploading...................", err);
                callback(err);
            } else {
                console.log("................Successfully Uploaded the Image...................", data);
                deleteFile(directory);
                callback(data);
            }
        });

    });

})

const deleteFile = ((directory) => {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    });

})

module.exports = {
    uploadImage,
    deleteFile,
};
