const response = require('./../utils/response.js');
const Constants = require('./../utils/consts.js');
const hashProfile = require('./../utils/userProfile.js');
const query = require('./../query/query.js');
const crypto = require('crypto');
const moment = require('moment-timezone');
const newYork    = moment.tz("America/New_York");
const async = require('async');


const signUpUser = async (req, res) => {
    try {
        req.checkBody('first_name', 'Please enter the first name').notEmpty().isAlpha();
        req.checkBody('email_id', 'Please enter the email Id').notEmpty().isEmail();
        req.checkBody('password', 'Please enter the password').notEmpty();
        req.checkBody('re_enter_password', 'Please enter the password').notEmpty();

        const errors = req.validationErrors();
        if (errors) {
            let error = '';
            errors.forEach(element => {
                error = error + ' ' + element.msg;
            });
            response.sendErrorCustomMessage(res, error, Constants.ERROR_500);
        } else {
            const passwordMatch = await checkPassword(req.body.password, req.body.re_enter_password);
            if (passwordMatch) {
                const userExist = await checkUserExist(req.body);
                if (userExist) {
                    response.sendSucessCustomMessage(res, 'User Already Exist', userExist, Constants.SUCCESS)
                } else {
                    const userData = await createUserInDb(req.body);
                    response.sendSucessCustomMessage(res, 'User Registered SuccessFully', userData, Constants.SUCCESS_201)
                }
            } else {
                response.sendErrorCustomMessage(res, 'Password Does Not match', Constants.ERROR_500)
            }
        }
    } catch (err) {
        console.log('.................the error is....................', err);
        response.sendErrorMessage(res, Constants.ERROR_500);
    }
};


const checkPassword = (password1, password2) => {
    return new Promise((resolve, reject) => {
        if (password1 == password2) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
};

const createUserInDb = (userData) => {
    let password;
    return new Promise((resolve, reject) => {
        hashProfile.getHash(userData.password).then((result) => {
            if (result) {
                password = result;
                const user_token = crypto.randomBytes(32).toString('hex');
                let dataToSave = {
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    email_id: userData.email_id,
                    password: password,
                    user_token: user_token,
                    created_on:newYork.format()
                };
                query.create('users', dataToSave, (err, result) => {
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

const checkUserExist = (userData) => {
    return new Promise((resolve, reject) => {
        let criteria = {
            email_id: userData.email_id,
            is_deleted: false,
        };
        query.get('users',criteria, {}, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    });
};
module.exports = {
    signUpUser,
};








