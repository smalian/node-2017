const http = require('http');
const util = require('util');
const queryString = require('querystring');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.createReadStream('./index2.html').pipe(res);
    }else if(pathname == '/post'){
        var contentType = req.headers['content-type'];
        console.log(contentType);
        req.setEncoding('utf8');
        var result = '';
        req.on('data',(data)=>{
            result += data;
        });
        req.on('end',(data)=>{
            console.log(result);
            if(contentType == 'application/json'){
                var obj = JSON.parse(result);
            }else if(contentType == 'application/x-www-form-urlencoded'){
                var obj = queryString.parse(result);
            }

            res.end(util.inspect(obj));
        });
    }


    //res.end();
}).listen(8086,()=>{
    console.log('server started');
});
