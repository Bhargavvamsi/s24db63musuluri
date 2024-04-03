var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var minerals_controller = require('../controllers/minerals');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// minerals ROUTES ///
// POST request for creating a minerals. 
router.post('/minerals', minerals_controller.minerals_create_post);
// DELETE request to delete minerals.
router.delete('/minerals/:id', minerals_controller.minerals_delete);
// PUT request to update minerals.
router.put('/minerals/:id', minerals_controller.minerals_update_put);
// GET request for one minerals.
router.get('/minerals/:id', minerals_controller.minerals_detail);
// GET request for list of all minerals items.
router.get('/minerals', minerals_controller.minerals_list);
module.exports = router;