const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const billboardInspection = new Schema({
    company_id:{ type: mongoose.Schema.ObjectId, ref: 'company'},
    user_id:{ type: mongoose.Schema.ObjectId, ref: 'users'},
    sigh: { type: String, required: false, default:''},
    display_number: { type: String, required: false, default:''},
    permit_number:{ type: String, required: false,default:''},
    photo_url: { type: String, required: false,default:''},
    document_url: { type: String, required: false,default:''},
    latitude: { type: Number, required: true,default:0},
    longitude: { type: Number, required: true,default:0},
    city:{ type: String, required: false,default:''},
    zip_code:{ type: String, required: false,default:''},
    parcel_no:{ type: String, required: false,default:''},
    street_no:{ type: String, required: false,default:''},
    street_name:{ type: String, required: false,default:''},
    state:{ type: String, required: false,default:''},
    structure_type:{ type: String, required: false,default:''},
    display_size:{ type: String, required: false,default:''},
    additional_cost:{ type: String, required: false,default:''},
    base_cost:{ type: String, required: false,default:''},
    display_element:{ type: String, required: false,default:''},
    illuminated:{ type: String, required: false,default:''},
    year_built:{ type: String, required: false,default:''},
    age:{ type: String, required: false,default:''},
    digital_display:{ type: String, required: false,default:''},
    year_digital_built:{ type: String, required: false,default:''},
    three_message_display:{ type: String, required: false,default:''},
    year_three_message_display:{ type: String, required: false,default:''},
    comments:{ type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('billboardInspection', billboardInspection);