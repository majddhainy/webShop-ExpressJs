const express = require('express');
const path = require('path');
//using this feature to export the routes and then import in  main file 
const router = express.Router();

// import products controller 
const  ProductsController = require('../controllers/products');
//import rootDir 
const rootDir = require('../util/path');



// Note : never forget that in main file (app.js) we are using /admin so all routes here are in this from /admin/RouteName 

// get route for adding a product ... 
router.get('/add-product',ProductsController.getAddProduct);

// post  route for adding a product ...  [on same name no problem]
router.post('/add-product',ProductsController.postAddProduct);


// exporting  admin routes  using module export 
module.exports = router;