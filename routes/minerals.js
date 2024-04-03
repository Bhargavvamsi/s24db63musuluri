var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('minerals', { title: 'Search Result Minerals' });
});

module.exports = router;
var express = require('express');
const minerals_controlers= require('../controllers/minerals');
var router = express.Router();
/* GET costumes */
router.get('/', minerals_controlers.minerals_view_all_Page);
module.exports = router;
