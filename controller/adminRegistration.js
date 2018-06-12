const response = require('./../utils/response.js');
const Constants = require('./../utils/consts.js');
const hashProfile = require('./../utils/userProfile.js');
const query = require('./../query/query.js');
const crypto = require('crypto');
const async = require('async');



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
module.exports = {
    createAdmin,
}








