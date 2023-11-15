const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.get('admin/detailQuality',{layout:'admin'});
})
module.exports = router;