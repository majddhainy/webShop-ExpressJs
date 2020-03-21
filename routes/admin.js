const express = require('express');
const path = require('path');
//using this feature to export the routes and then import in  main file 
const router = express.Router();

//import rootDir 
const rootDir = require('../util/path');

// products array 
const products = [];

// Note : never forget that in main file (app.js) we are using /admin so all routes here are in this from /admin/RouteName 

// get route for adding a product ... 
router.get('/add-product',(req,res,next)=>{
    // console.log("In the first  middleware ! ");
    // [ Returning HTML data ] return res.send('<html> <h1>Add Product page ! </h1> <form method="post" action="add-product"><input type="text" name="product" ><button type="submit"   >Add</button></form></html>');
    //next(); // allow the request to continue to the next middleware 
    // [Returning HTML file 'view' ] res.sendFile(path.join(rootDir,'views','add-product.html'));

    // [similar to Laravel] using template engine (EJS) so we render instead of sending files and we can pass data {key:value} to the EJS view  (in any template engine)
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
        //path: '"<script>alert(1)</script>'
    });
});

// post  route for adding a product ...  [on same name no problem]
router.post('/add-product',(req,res,next)=>{
    // console.log("here");
    // console.log(req.body);
    products.push(req.body);
    res.redirect('/');
    //next(); // allow the request to continue to the next middleware 
});


// exporting  admin routes and products using module export 
module.exports.routes = router;
module.exports.products = products;