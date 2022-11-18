var Library = require('../models/Library');
// List of all Library
//exports.Library_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: Library list');
//};


// List of all Librarys 
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

// List of all Librarys 
exports.Library_detail = async function(req, res) { 
    try{ 
        theLibrary = await Library.find(); 
        res.send(theLibrary); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Library create on POST. 
exports.Library_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Library create POST'); 
}; 

// List of all Library 
exports.Library_create_post = async function(req, res) { 
    try{ 
        theLibrary = await Library.find(); 
        res.send(theLibrary); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};


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


// Handle Library update form on PUT. 
// exports Library_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: Library update PUT' + req.params.id); 
// }; 

// List of all Librarys 
// exports Library_update_put = async function(req, res) { 
//     try{ 
//         th Librarys = await Library.find(); 
//         res.send(th Librarys); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle Library update form on PUT. 
exports.Library_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        //console.log("Webapps-01");
        let toUpdate = await Library.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Library_style) toUpdate.Library_style = req.body.Library_style; 
        if(req.body.Library_type) toUpdate.Library_type = req.body.Library_type; 
        if(req.body.Library_size) toUpdate.Library_size = req.body.Library_size; 
        //console.log("Webapps-02"+toUpdate);
    
        let result = await toUpdate.save(); 
        //console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a Library. 
// query provides the id 
exports.Library_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Library.findById(req.query.id) 
        res.render( 'Libraryupdate', { title:  'Library Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Library_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Library.findById(req.query.id) 
        res.render( 'Librarydelete', { title:  'Library Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a Library. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Library_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render( 'Librarycreate', { title:  'Library Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.Library_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Library.findById( req.query.id) 
        res.render( 'Librarydetail',  
{ title:  'Library Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.Library_view_all_Page = async function(req, res) { 
    try{ 
        theLibrarys = await Library.find(); 
        res.render( 'Library', { title:  'Library Search Results', results: theLibrarys }); 
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
    // { Library_type":"goat", "cost":12, "size":"large"} 
    document.item = req.body.item; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle building the view for creating a Library. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Library_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Librarycreate', { title: 'Library Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a Library. 
// query provides the id 
exports.Library_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Library.findById(req.query.id) 
        console.log("PB" + result)
        res.render('Libraryupdate', { title: 'Library Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Library_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Library.findById(req.query.id) 
        res.render('Librarydelete', { title: 'Library Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 







