/**
 * Created by APPLE on 2017/5/9.
 */
const http = require('http');
const fs = require('fs');

var app = http.createServer((req,res)=>{

    console.log(req.method,req.url);//请求的方法和url
    //console.log(req.headers);//获取请求头
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

});
app.listen(8086,'localhost');