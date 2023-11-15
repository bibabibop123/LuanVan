const express = require('express');
const router = express.Router();

const adminUserController = require('../../app/controllers/Admin/AdminUserController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication,  adminUserController.adminUser);
module.exports = router;