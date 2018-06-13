const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Consts = require('../utils/consts.js');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const depreciation = new Schema({
    year: { type: String, required: false, default:''},
    wood: { type: String, required: false, default:''},
    steel: { type: String, required: false, default:''},
    digital: { type: String, required: false, default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('depreciation', depreciation);