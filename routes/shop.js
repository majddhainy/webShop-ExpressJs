const express = require('express');
const path = require('path');

//using this feature to export the routes and then import in  main file 
const router = express.Router();

//import rootDir 
const rootDir = require('../util/path');

// import products controller 
const  ProductsController = require('../controllers/products');

// to get products import from /routes/admin.js  [ just now no DB yet ! ] 
const adminData = require('../routes/admin');


// get request to / 'Home' will display all products 
router.get('/',ProductsController.getProducts);




// exporting route/s to router which will be imported by app.js
module.exports = router;