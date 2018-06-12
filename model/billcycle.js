const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");

const billCycle = new Schema({
    company_id:[{ type: mongoose.Schema.ObjectId, ref: 'company'}],
    date: { type: String, required: true},
    fee:{ type: String, required: false,default:''},
    value_per_year: { type: String, required: false,default:''},
    customer_type: { type: String, required: false,default:''},
    rate:{ type: String, required: false,default:''},
    date_next_payment_due:{ type: String, required: false,default:''},
    transaction_history_invoice_date: { type: String, required: true},
    invoice_number:{ type: String, required: false,default:''},
    customer_type_two: { type: String, required: false,default:''},
    amount_due: { type: String, required: false,default:''},
    status:{ type: String, required: false,default:''},
    credit_card_info:{ type: String, required: false,default:''},
    terms_and_conditions_url:{ type: String, required: false,default:''},
    account_agreement_url:{ type: String, required: false,default:''},
    is_deleted: { type: String, required: true,default:false},
    created_on: { type: String, required:true,default:newYork.format()},
}, { versionKey: false });


module.exports = mongoose.model('billCycle', billCycle);