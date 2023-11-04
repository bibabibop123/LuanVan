const express = require('express');
const router = express.Router();

const adminUserController = require('../../app/controllers/Admin/AdminUserController');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminUserController.adminUser);
module.exports = router;