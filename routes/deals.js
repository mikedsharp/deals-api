"use strict";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/deals/public');
});

router.get('/public', function(req, res, next) {
  let deals = [
    // Array of public deals here
  ];
  res.json(deals);
});

router.get('/private', function(req, res, next) {
  let deals = [
    // Array of private deals here
  ];
  res.json(deals);
});

module.exports = router;
