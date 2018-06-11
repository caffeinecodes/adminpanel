const router = require('express').Router();
const adminRegistrationController = require('../controller/adminRegistration');
const passport = require('../utils/userPassport');


router.post('/',adminRegistrationController.createAdmin);





module.exports = router;