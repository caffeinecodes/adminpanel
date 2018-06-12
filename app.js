/*jshint esversion: 6 */

const express = require('express');
const Uploader = require('s3-image-uploader');
const config = require('./config.js');

const bodyParser = require('body-parser');


const adminRegistration=require('./routes/adminRegistration');
const userRegistration=require('./routes/userSignUp');

const app = express();
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 9000;


//const winstonLogger = require('./utils/winstonLogger.js');
const validator = require('express-validator');
const passport = require('passport');

require('dotenv').config();

//logger tool
app.use(morgan('dev'));

//CORS requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});




app.use(bodyParser.urlencoded({
    extended: true
}));




app.use(passport.initialize());

app.use(validator());


app.use(bodyParser.json());


app.use('/admin',adminRegistration);
app.use('/users',userRegistration);


app.listen(port, () => {

    console.log(" server is running on port number  " + process.env.PORT);
});
