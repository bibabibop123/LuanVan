const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.get('admin/update-admin',{layout:'admin'});
})
module.exports = router;