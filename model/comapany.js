const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const comapany = new Schema({
    company_name: { type: String, required: true},
    user_name:{ type: String, required: false,default:''},
    logo_url: { type: String, required: false,default:''},
    password: { type: String, required: false,default:''},
    contact:{ type: String, required: false,default:''},
    website:{ type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('comapany', comapany);