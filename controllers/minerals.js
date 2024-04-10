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
   // Handle minerals create on POST.
exports.minerals_create_post = async function(req, res) {
    console.log(req.body)
    let document = new minerals();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"minerals_type":"goat", "cost":12, "size":"large"}
    document.Mineral_name = req.body.Mineral_name;
    document.Color = req.body.Color;
    document.Hardness_level = req.body.Hardness_level;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   // for a specific minerals.
exports.minerals_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await minerals.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle minerals update form on PUT.
exports.minerals_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await minerals.findById( req.params.id)
 // Do updates of properties
 if(req.body.Mineral_name) 
 toUpdate.Mineral_name = req.body.Mineral_name;
 if(req.body.Color) toUpdate.Color = req.body.Color;
 if(req.body.Hardness_level) toUpdate.Hardness_level = req.body.Hardness_level;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
};
// Handle Minerals delete on DELETE.
exports.minerals_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
     result = await minerals.findByIdAndDelete(req.params.id)
     console.log("Removed " + result)
     res.send(result)
    } catch (err) {
     res.status(500)
     res.send(`{"error": Error deleting ${err}}`);
    }
   };
   // Handle a show one view with id specified by query
exports.minerals_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await minerals.findById( req.query.id)
    res.render('mineralsdetail', 
   { title: 'Minerals Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };