const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const appeals = new Schema({
    company_id:[{ type: mongoose.Schema.ObjectId, ref: 'company'}],
    sign_owner: { type: String, required: false, default:''},
    sign_owner_representative_name:{ type: String, required: false,default:''},
    sign_owner_representative_contact:{ type: String, required: false,default:''},
    sign_owner_representative_email:{ type: String, required: false,default:''},
    country_representative_name:{ type: String, required: false,default:''},
    country_representative_contact:{ type: String, required: false,default:''},
    country_representative_email:{ type: String, required: false,default:''},
    appeal_date:{ type: String, required: false,default:''},
    reason_for_appeal:{ type: String, required: false,default:''},
    meeting_date:{ type: String, required: false,default:''},
    meeting_location:{ type: String, required: false,default:''},
    meeting_notes:{ type: String, required: false,default:''},
    hearing_date:{ type: String, required: false,default:''},
    hearing_location:{ type: String, required: false,default:''},
    decision_date:{ type: String, required: false,default:''},
    decision_notes:{ type: String, required: false,default:''},
    new_valuation_methodology:{ type: String, required: false,default:''},
    court_date:{ type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('appeals', appeals);