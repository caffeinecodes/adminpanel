const Mongoose = require('mongoose');
Mongoose.Promise = require('bluebird');
require('dotenv').config();

Mongoose.connect(process.env.MONGO_URL);
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.db = db;