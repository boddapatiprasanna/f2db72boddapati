var Library = require('../models/Library');
// List of all Librarys
exports.Library_list = async function (req, res) {
    try {
        theLibrarys = await Library.find();
        res.send(theLibrarys);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Library.
exports.Library_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Library detail: ' + req.params.id);
};
// Handle Library create on POST.
exports.Library_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Library();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Library_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.duration = req.body.duration;
    document.director = req.body.director;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Library delete form on DELETE.
exports.Library_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Library delete DELETE ' + req.params.id);
};
// Handle Library update form on PUT.
exports.Library_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Library update PUT' + req.params.id);
};
exports.flim_view_all_Page = async function (req, res) {
    try {
        theLibrarys = await Library.find();
        res.render('Librarys', { title: 'Library Search Results', results: theLibrarys });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};