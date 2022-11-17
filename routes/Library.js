var express = require('express');
const Library_controlers= require('../controllers/Library');
var router = express.Router();

// /* GET home page. */
 //router.get('/', function(req, res, next) {
 //  res.render('Library', {title:'Search Results Library'});
//});
/* GET detail Library page */ 
router.get('/detail', Library_controlers.Library_view_one_Page);
/* GET Library */ 
router.get('/', Library_controlers.Library_view_all_Page );
/* GET create Library page */ 
router.get('/create', Library_controlers.Library_create_Page); 
/* GET create update page */ 
router.get('/update', Library_controlers.Library_update_Page); 
/* GET delete Library page */ 
router.get('/delete', Library_controlers.Library_delete_Page); 
// GET request for one Library. 
router.get('/Librarys/:id', Library_controlers.Library_detail); 
module.exports = router;
/* GET create update page */ 
router.get('/update', Library_controlers.Library_update_Page); 
/* GET delete Library page */ 
router.get('/delete', Library_controlers.Library_delete_Page); 
 
 
 
