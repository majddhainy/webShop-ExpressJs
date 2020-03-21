const express = require('express');
const path = require('path');

//using this feature to export the routes and then import in  main file 
const router = express.Router();

//import rootDir 
const rootDir = require('../util/path');

// to get products import from /routes/admin.js  [ just now no DB yet ! ] 
const adminData = require('../routes/admin');
const products = adminData.products;

// get request to / 'Home' will display all products 
router.get('/',(req,res,next)=>{

    // [ Returning HTML data ]  return res.send('<html> <h1>Hello From express js ! Welcome to the shop </h1></html>')
    // //res.send auto  detect content type and header 

    // sharing data here in array products between all files 
    console.log(adminData.products)

    // [Returning HTML file 'view' ]  res.sendFile(path.join(rootDir,'views','shop.html'));

     // [similar to Laravel] using template engine (EJS) so we render instead of sending files and we can pass data {key:value} to the EJS view  (in any template engine)
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
});




// exporting route/s to router which will be imported by app.js
module.exports = router;