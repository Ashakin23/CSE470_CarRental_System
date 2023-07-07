var express = require('express');
var usercontroller = require('..src/user/usercontroller');
const router = express.Router();
require('../src/user/usercontroller');
router.route('/user/login').post(usercontroller.loginusercontrollerFn);
router.route('/user/create').post(usercontroller.createusercontrollerFn);
module.exports = router;