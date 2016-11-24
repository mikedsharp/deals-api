"use strict";
var express = require('express');
var router = express.Router();
var config = require('./config');

const jwt = require('express-jwt');

const authCheck = jwt({
  secret: new Buffer(config.secret, 'base64'),
  audience: config.clientId
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/deals/public');
});

router.get('/public', function(req, res, next) {
  let deals = [
    // Array of public deals here
    {
        id: 1,
        name: 'Bacon',
        description: 'Description of Product',
        originalPrice: 19.99, // Original price of product
        salePrice: 9.99 // Sale price of product
    }, 
    {
        id: 2,
        name: 'Eggs',
        description: 'Description of Product',
        originalPrice: 19.99, // Original price of product
        salePrice: 9.99 // Sale price of product 
    }

    
  ];
  res.json(deals);
});

router.get('/private', authCheck, function(req, res, next) {
  let deals = [
    // Array of private deals here
     {
        id: 3,
        name: 'Forbidden Eggs',
        description: 'Description of Product',
        originalPrice: 19.99, // Original price of product
        salePrice: 9.99 // Sale price of product 
    }
  ];
  res.json(deals);
});

module.exports = router;
