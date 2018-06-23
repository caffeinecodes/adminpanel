const router = require('express').Router();
const adminController = require('../controller/adminController');
const passport = require('../utils/userPassport');


router.post('/',adminController.createAdmin);
router.post('/createUser/',adminController.createUserAccount);

// router.post('/createUser',adminRegistrationController.createUserAccount);





module.exports = router;