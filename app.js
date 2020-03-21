//import express js 
const express = require('express');

// import body parser to parse requests ... [just requests from forms later on we see more ...] 
const bodyParser = require('body-parser');

// express() stored in app   used down  [he express() function is a top-level function exported by the express module] 
const app = express();

// template engine  EJS better than (pug & handlebars)  uses normal [HTML and JS inside files]
app.set('view engine','ejs');

// by default /views is the views dir but u can change using app.set('views','viewsFoldername');

//importing admin (routes  and Data[products])  from routes/admin.js [ CHECK IT ! ]
const adminData = require('./routes/admin');

//importing shop routes for normal users    from routes/shop.js [ CHECK IT ! ]
const shopRoutes = require('./routes/shop');

// import this .. to construct path easily  [on diff OS also]
const path = require('path');

//importing main path  from util/path.js [ CHECK IT ! ]
const rootDir = require('./util/path');

//middleware that let all requests be parsed using bodyParser 
app.use(bodyParser.urlencoded());

// static access to public folder to let other  files view it normally  WHY? => [By default  users can't see any thing that have no predefined route ! ]
app.use(express.static(path.join(rootDir,'public')));

//  ==     using specific GET and POST will make path EXACT not MATCH  or REGEX while using USE will take any path starts with /xyz ...    ==

// using admin routes here , '/admin' instead of using many times in get post and all admin routes use once here !  [ So all admin routes will start with admin/ ]
app.use('/admin',adminData.routes);

// using shop routes here [Note order still important in our middlewares]
app.use(shopRoutes);

//  any route outside our  predefined routes will return and 404 page ... 
app.use('/',(req,res,next)=>{
    res.status(404).render('404', { pageTitle: 'Page Not Found' , path : '' });
})

//running our server on port 3000
app.listen(3000);