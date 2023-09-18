const express = require('express');
const router = express.Router();


const changepassController = require('../app/controllers/ChangePassController');

router.get('/',changepassController.changePass);
router.post('/',changepassController.changePassAction);
module.exports = router;