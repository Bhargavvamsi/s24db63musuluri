var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('minerals', { title: 'Search Result Minerals' });
});

module.exports = router;