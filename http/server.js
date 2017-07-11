const http = require('http');

//curl -v http://localhost:8086 请求的详细信息
http.createServer((req,res)=>{
    //console.log(req.method,req.url,req.headers,req.httpVersion);
    res.setHeader('Content-Type',"text/html");
    console.log(res.getHeader('Content-Type'));
    res.removeHeader('Content-Type');
    console.log(res.getHeader('Content-Type'));
    console.log(res.headersSent);
    res.setData = false;
    res.statusCode = 200;
    res.write('hello');
    console.log(res.headersSent);
    res.end('world!');
}).listen(8086,()=>{
    console.log('server started');
});
