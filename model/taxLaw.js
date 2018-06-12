const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const taxLaw = new Schema({
    company_id:[{ type: mongoose.Schema.ObjectId, ref: 'company'}],
    controlling_Statutes: { type: String, required: false, default:''},
    comments:{ type: String, required: false,default:''},
    document_url_one: { type: String, required: false,default:''},
    document_url_two: { type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('taxLaw', taxLaw);