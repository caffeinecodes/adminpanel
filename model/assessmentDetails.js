const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const assessmentDetails = new Schema({
    company_id:[{ type: mongoose.Schema.ObjectId, ref: 'company'}],
    start_date: { type: String, required: false, default:''},
    end_date:{ type: String, required: false,default:''},
    valuation_cycle: { type: String, required: false,default:''},
    notice_date: { type: String, required: false,default:''},
    billing: { type: String, required: false, default:''},
    property:{ type: String, required: false,default:''},
    assessment_ratio: { type: String, required: false,default:''},
    tax_rate: { type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('assessmentDetails', assessmentDetails);