// array of products 
const products = [] ;
const fs = require('fs');
const rootDir = require('../util/path');
const path = require('path');
const filePath = path.join(rootDir,'data','products.json');

// exporting the class to import in another file 
module.exports = class {
    constructor(title){
        this.title = title;
    }

    save () {
        fs.readFile(filePath,(err,fileContent)=>{
            let products = [];
            if(!err){
                if(fileContent != ''){
                    products = JSON.parse(fileContent);
                }
                products.push(this);
                fs.writeFile(filePath,JSON.stringify(products),(err)=>{
                    console.log(err);
                });
            }
        });
    }

    // to call without creating an instance 
    static fetchAll(cb) {
        // WAITING THE CALL BACK !!!!!!!!!!!!!!!
        fs.readFile(filePath,(err,fileContent)=>{
            if(!err && fileContent != ''){
                //console.log(fileContent);
                cb(JSON.parse(fileContent));
                //console.log("Hello"); NOTE HERE CALL BACKS ! 
            }

            else 
                cb([]);
                //console.log("Hello");

        });
    }
}

