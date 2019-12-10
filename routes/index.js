var express = require('express');
var router = express.Router();
var hobbyCtrl = require('../controller/hobby')

/* GET home page. */
router.get('/', hobbyCtrl.index )
router.post('/add' , hobbyCtrl.add)
router.get('/show/:id' , hobbyCtrl.show)
router.post('/update/:id' ,hobbyCtrl.update)
router.post('/delete/:id' , hobbyCtrl.delete)
module.exports = router;
