const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');

const admin = new Schema({
    admin_name: { type: String, sparse: true },
    password:{ type: String, required: true},
    email_id: { type: String, sparse: true},
    admin_token: { type: String, required: false,unique:true},
    device_token: { type: String, required: false},
    admin_created: { type: Date, default: Date.now() },
}, { versionKey: false });


module.exports = mongoose.model('admin', admin);