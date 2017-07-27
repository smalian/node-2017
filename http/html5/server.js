const mime = require('mime');
const http = require('http');
const util = require('util');
const queryString = require('querystring');
const url = require('url');
const fs = require('fs');
const formidable = require('formidable');

var app = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.createReadStream('./index.ejs').pipe(res);
    }else if(pathname == '/post') {
        var parser = new formidable.IncomingForm();
        parser.parse(req,(err,fields,files)=>{
            console.log(files);
            res.end('hello');
        })
    }else{
        res.end('404');
    }
}).listen(8088,()=>{
    console.log('server started');
});
