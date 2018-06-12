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



    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('appeals', appeals);