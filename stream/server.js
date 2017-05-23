const http = require('http');
var app = http.createServer((req,res)=>{
    res.end('404');
    req.setEncoding('utf8');
    req.on('data',(data)=>{
       console.log(data);//得到的是请求体
    })
});
app.listen(8086);
