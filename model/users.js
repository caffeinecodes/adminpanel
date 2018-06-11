const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Consts = require('../utils/consts.js');

const users = new Schema({
    first_name: { type: String, required: true },
    last_name:{ type: String, required: false,default:''},
    email_id: { type: String, required: true},
    password: { type: String, required: true},
    is_deleted: { type: String, required: true,default:false},
    is_email_verified: { type: String, required: false,default:false},
    user_token: { type: String, required: false,unique:true},
    device_token: { type: String, required: false,default:''},
    created_on: { type: String, required:true },
}, { versionKey: false });


module.exports = mongoose.model('users', users);