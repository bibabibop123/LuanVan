const express = require('express');
const router = express.Router();

const admincreateController = require('./../../app/controllers/AdminCreateController');

router.get('/', (req,res)=>{
    res.render('admin/create-admin',{layout:'admin'});
})
router.post('/', admincreateController.adminCreate)

module.exports = router;