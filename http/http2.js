/**
 * Created by APPLE on 2017/5/9.
 */
const http = require('http');
const fs = require('fs');
const mime = require('mime');

var app = http.createServer((req,res)=>{
    var url = req.url;
    if(url == "/"){
        res.statusCode = 200;
        //设置相应的类型，编码为utf-8；
        res.setHeader('content-Type','text/html;charset=utf-8');
        res.setHeader('name','smain');//设置响应头
        fs.readFile('index.html',(err,data)=>{
            if(err){
                console.error(err);
            }else{
                res.write(data);
                res.end();
            }
        });
    }else{
        static(url,res);
    }
});
app.listen(8086,'localhost');


function static(url,res){
    res.setHeader('content-Type',mime.lookup(url)+';charset=utf-8');
    res.setHeader('name','smain');//设置响应头
    fs.readFile(url.slice(1),(err,data)=>{
        if(err){
            console.error(err);
        }else{
            res.write(data);
            res.end();
        }
    });
}