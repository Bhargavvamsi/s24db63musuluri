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
// VIEWS
// Handle a show all view
exports.minerals_view_all_Page = async function(req, res) {
    try{
    theminerals = await minerals.find();
    res.render('minerals', { title: 'minerals Search Results', results: theminerals });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   // Handle Costume create on POST.
exports.costume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Costume();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.costume_type = req.body.costume_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }