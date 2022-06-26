const { response } = require('express');
var express = require('express');
var DatabaseAbstractLayer = require('../public/javascripts/DatabaseAbstractLayer');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


  DatabaseAbstractLayer.queryDealsCollection().then(response=>{
    res.json(response);
  }).catch(error=>{
    res.status(501).json({});
  })

});

module.exports = router;
