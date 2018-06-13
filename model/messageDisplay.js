const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const messageDisplay = new Schema({
    size: { type: String, required: false, default:''},
    display_cost: { type: String, required: false, default:''},
    three_msg_display_cost: { type: String, required: false, default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('messageDisplay', messageDisplay);