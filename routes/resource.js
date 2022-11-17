var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Library_controller = require('../controllers/Library');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// FILM ROUTES ///
// POST request for creating a Film.
router.post('/Librarys', Library_controller.Library_create_post);
// DELETE request to delete Film.
router.delete('/Librarys/:id', Library_controller.Library_delete);
// PUT request to update Film.
router.put('/Librarys/:id', Library_controller.Library_update_put);
// GET request for one Film.
router.get('/Librarys/:id', Library_controller.Library_detail);
// GET request for list of all Film items.
router.get('/Librarys', Library_controller.Library_list);
module.exports = router;
//GET detail costume page */ 
//router.get('/detail', costume_controlers.costume_view_one_Page); 
 