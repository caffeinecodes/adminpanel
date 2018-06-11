const router = require('express').Router();
const userRegisterController = require('../controller/userSignUp');
const passport = require('../utils/userPassport');


router.post('/',userRegisterController.signUpUser);
//router.post('/',userRegisterController.loginUser);





module.exports = router;