/**
 * Created by APPLE on 2017/5/9.
 */
const http = require('http');
const fs = require('fs');
const mime = require('mime');
const urlLib = require('url');

var app = http.createServer((req,res)=>{
    var url = req.url;
    var urlObj = urlLib.parse(req.url,true); //true表示query转换成对象
    console.log(req.url,urlObj.query);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
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
    }else if(pathName == '/clock'){
        res.statusCode = 200;
        //设置相应的类型，编码为utf-8；
        res.setHeader('content-Type','text/html;charset=utf-8');
        res.setHeader('name','smain');//设置响应头
        var counter = 0;
        var time = setInterval(function(){
            res.write(new Date().toString());
            counter++;
            if(counter==5){
                clearInterval(time);
                res.end();
            }
        },1000)
    }else{
        static(pathName,res);
    }
});
app.listen(8086,'localhost');


function static(pathName,res){
    res.setHeader('content-Type',mime.lookup(pathName)+';charset=utf-8');
    res.setHeader('name','smain');//设置响应头
    fs.readFile(pathName.slice(1),(err,data)=>{
        if(err){
            console.error(err);
        }else{
            res.write(data);
            res.end();
        }
    });
}