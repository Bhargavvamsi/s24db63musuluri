var minerals = require('../models/minerals');
// List of all Minerals
exports.minerals_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Minerals list');
};
// for a specific Minerals.
exports.minerals_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Minerals detail: ' + req.params.id);
};
// Handle Minerals create on POST.
exports.minerals_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Minerals create POST');
};
// Handle Minerals delete from on DELETE.
exports.minerals_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Minerals delete DELETE ' + req.params.id);
};
// Handle Minerals update form on PUT.
exports.minerals_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Minerals update PUT' + req.params.id);
};
// List of all mineralss
exports.minerals_list = async function(req, res) {
    try{
    theminerals = await minerals.find();
    res.send(theminerals);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };