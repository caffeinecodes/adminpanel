const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const procurementContactInfo = new Schema({
    company_id:[{ type: mongoose.Schema.ObjectId, ref: 'company'}],
    title: { type: String, required: false, default:''},
    name:{ type: String, required: false,default:''},
    address: { type: String, required: false,default:''},
    contact: { type: String, required: false,default:''},
    email:{ type: String, required: false,default:''},
    fax:{ type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('procurementContactInfo', procurementContactInfo);