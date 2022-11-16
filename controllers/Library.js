var Library = require('../models/Library');
// List of all Library
exports.Library_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Library list');
};
// for a specific Library.
// for a specific Library. 
exports.Library_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Library.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Library create on POST.
//exports.Library_create_post = function(req, res) {
 //res.send('NOT IMPLEMENTED: Library create POST');
//};
// Handle Library delete form on DELETE.
//exports.Library_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: Library delete DELETE ' + req.params.id);
 
//};
// Handle Library delete on DELETE. 
exports.Library_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Library.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// VIEWS

   // List of all Library
exports.Library_list = async function(req, res) {
    try{
    theLibrary = await Library.find();
    res.send(theLibrary);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Library_view_all_Page = async function(req, res) {
    try{
    theLibrary = await Library.find();
    res.render('Library', { title: 'Library Search Results', results: theLibrary });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Library create on POST.
exports.Library_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Library();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Library_type":"goat", "cost":12, "size":"large"}
    document.Library_style = req.body.Library_style;
    document.Library_type = req.body.Library_type;
    document.Library_type = req.body.Library_type;
    document.Library_size = req.body.Library_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
// Handle Library update form on PUT. 
exports.Library_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Library.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Library_type)  
               toUpdate.Library_type = req.body.Library_type; 
        if(req.body.cost) toUpdate.size = req.body.size; 
        if(req.body.size) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 