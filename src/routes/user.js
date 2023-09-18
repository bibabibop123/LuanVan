const express = require('express');
const router = express.Router();


const userController = require('../app/controllers/UserController');
const { userAuthentication } = require('../common/authen');

router.get('/',userAuthentication, userController.user)
router.post('/',userAuthentication,userController.updateUser);
module.exports = router;