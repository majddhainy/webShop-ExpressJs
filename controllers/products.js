// import product Model 
const Product  = require('../models/product');

exports.getAddProduct = (req,res,next) => {
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
}

exports.postAddProduct = (req,res,next)=>{
    // console.log("here");
    // console.log(req.body);
    product = new Product(req.body.title);
    product.save();
    res.redirect('/');
    //next(); // allow the request to continue to the next middleware 
}

exports.getProducts = (req,res,next)=>{

    // [ Returning HTML data ]  return res.send('<html> <h1>Hello From express js ! Welcome to the shop </h1></html>')
    // //res.send auto  detect content type and header 

    // getting all products from the Model 
    products = Product.fetchAll((products)=>{
        console.log(products)

        // [Returning HTML file 'view' ]  res.sendFile(path.join(rootDir,'views','shop.html'));
    
         // [similar to Laravel] using template engine (EJS) so we render instead of sending files and we can pass data {key:value} to the EJS view  (in any template engine)
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
          });
    });

}