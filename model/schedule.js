const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const schedule = new Schema({
  //  company_id:{ type: mongoose.Schema.ObjectId, ref: 'company'},
   // user_id:[{ type: mongoose.Schema.ObjectId, ref: 'users'}],
    base_type: { type: String, required: false, default:''},
    frame_type: { type: String, required: false, default:''},
    size:{ type: String, required: false,default:''},
    year: { type: String, required: false,default:''},
    zero_twenty_hagl: { type: String, required: false,default:''},
    twentyone_thirty_hagl: { type: String, required: false,default:''},
    thirtyone_fourty_hagl: { type: String, required: false,default:''},
    fourtyone_fiftyfive_hagl: { type: String, required: false,default:''},
    fiftysix_eighty_hagl: { type: String, required: false,default:''},
    eighty_plus_hagl: { type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('schedule', schedule);