const response = require('./../utils/response.js');
const Constants = require('./../utils/consts.js');
const hashProfile = require('./../utils/userProfile.js');
const query = require('./../query/query.js');
const crypto = require('crypto');
const async = require('async');
// const createEntry = require('./../utils/common_queries.js')

const createEntry = (modelName,criteria) => {
    let password;
    return new Promise((resolve, reject) => {
        if('password' in criteria){
            hashProfile.getHash(criteria.password).then((result) => {
                if (result) {
                    password = result;
                    // const token = crypto.randomBytes(32).toString('hex');
                    let dataToSave = {
                        ...criteria,
                        password:result,
                        // user_token:token
                    };
                    query.create(modelName, dataToSave, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(result)
                        }
                    });
                } else {
                    reject()
                }
    
            });
        }else{
            let dataToSave = {
                ...criteria
            }
            query.create(modelName, dataToSave, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        }
        
    });

};


const checkExistence = (modelName, criteria) => {
    return new Promise((resolve, reject) => {
        query.get(modelName, criteria, {}, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })


    })
};

const createAdmin = async (req, res) => {
    try {
        req.checkBody('email_id', 'Please enter the email Id').notEmpty();
        req.checkBody('password', 'Please enter the password').notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            let error = '';
            errors.forEach(element => {
                error = error + ' ' + element.msg;
            });
            response.sendErrorCustomMessage(res, error, Constants.ERROR_500);
        } else {
            const adminData = await getAdmin(req.body);
            if (adminData) {
                response.sendSucessCustomMessage(res, 'Admin Already Exist', adminData, Constants.SUCCESS)
            } else {
                const newAdminData = await createAdminData(req.body)
                response.sendSucessCustomMessage(res, 'Admin Created successfully', newAdminData, Constants.SUCCESS_201)
            }
        }
    } catch (err) {
        console.log('.................the error is....................', err);
        response.sendErrorMessage(res, Constants.ERROR_500);
    }
};


const getAdmin = (adminData) => {
    return new Promise((resolve, reject) => {
        let criteria = {
            email_id: adminData.email_id
        };
        let projection = {};
        query.get('admin', criteria, projection, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })


    })
};

const createAdminData = (adminData) => {
    let password;
    return new Promise((resolve, reject) => {
        hashProfile.getHash(adminData.password).then((result) => {
            if (result) {
                password = result;
                const admin_token = crypto.randomBytes(32).toString('hex');
                let dataToSave = {
                    email_id: adminData.email_id,
                    password: password,
                    admin_token: admin_token,
                };
                query.create('admin', dataToSave, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                });
            } else {
                reject()
            }

        });
    });

};


const createUserAccount = async (req, res) => {
    if('account_details' in req.body){
        console.log(req.body.account_details.user_name);
        const checkUserExistence = await checkExistence('company' , {user_name:req.body.account_details.user_name})
        if(checkUserExistence){
            res.send({code:409, 'message':'User name Already Exist'});
        }
        const company = await createEntry('company', req.body.account_details)
        let responseData = {
            is_billing_cycle_added:false,
            is_management_contact_info_added:false,
            is_procurement_contact_info_added:false,
            is_tax_law_added:false,
            is_assessment_details_added:false,
            is_appeals_added:false,
            is_countries_added:false,
            is_training_schedule_added:false
        }
        if(company){
            responseData['company'] = company
            company_id = company._id
            if(req.body.billing_cycle){
                req.body.billing_cycle['company_id'] = company_id
                const billing_cycle = await createEntry('billCycle', req.body.billing_cycle)
                responseData['is_billing_cycle_added'] = billing_cycle ? true :false;
            }
            if(req.body.management_contact_info){
                req.body.management_contact_info['company_id'] = company_id
                const management_contact_info = await createEntry('managmentContactInfo', req.body.billing_cycle)
                responseData['is_management_contact_info_added'] = management_contact_info ? true :false;
            }if(req.body.procurement_contact_info){
                req.body.procurement_contact_info['company_id'] = company_id
                const procurement_contact_info = await createEntry('procurementContactInfo', req.body.procurement_contact_info)
                responseData['is_procurement_contact_info_added'] = procurement_contact_info ? true :false;
            }if(req.body.tax_law){
                req.body.tax_law['company_id'] = company_id
                const tax_law = await createEntry('taxLaw', req.body.tax_law)
                responseData['is_tax_law_added'] = tax_law ? true :false;
            }if(req.body.assessment_details){
                req.body.assessment_details['company_id'] = company_id
                const assessment_details  = await createEntry('assessmentDetails', req.body.assessment_details)
                responseData['is_assessment_details_added'] = assessment_details ? true :false;
            }if(req.body.appeals){
                req.body.appeals['company_id'] = company_id
                const appeals  = await createEntry('appeals', req.body.appeals)
                responseData['is_appeals_added'] = appeals ? true :false;
            }if(req.body.countries){
                let data = {
                    company_id,
                    countries:req.body.countries
                }
                const countries  = await createEntry('country', data)
                responseData['is_countries_added'] = countries ? true :false;
            }if(req.body.training_schedule){
                req.body.training_schedule['company_id'] = company_id
                const training_schedule  = await createEntry('trainingSchedule', req.body.training_schedule)
                responseData['is_training_schedule_added'] = training_schedule ? true :false;
            };
        }
        res.send({data:responseData})
    }
    res.send({code:409, message :"Invalid Entry"})
};


module.exports = {
    createAdmin,
    createUserAccount
}








