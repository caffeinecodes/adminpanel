const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const trainingSchedule = new Schema({
    company_id:{ type: mongoose.Schema.ObjectId, ref: 'company'},
    date: { type: String, required: false, default:''},
    time: { type: String, required: false, default:''},
    contact: { type: String, required: false, default:''},
    training_type: { type: String, required: false, default:''},
    Comments: { type: String, required: false, default:''},
    country_client_url: { type: String, required: false, default:''},
    sign_client_url: { type: String, required: false, default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('trainingSchedule', trainingSchedule);