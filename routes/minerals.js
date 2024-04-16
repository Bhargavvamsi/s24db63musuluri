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
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET minerals */
router.get('/', minerals_controlers.minerals_view_all_Page);
/* GET detail minerals page */
router.get('/detail', minerals_controlers.minerals_view_one_Page);
/* GET create minerals page */
router.get('/create',secured, minerals_controlers.minerals_create_Page);
/* GET create update page */
router.get('/update',secured, minerals_controlers.minerals_update_Page);
/* GET delete minerals page */
router.get('/delete',secured, minerals_controlers.minerals_delete_Page);
module.exports = router;
