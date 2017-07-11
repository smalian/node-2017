const http = require('http');
const url = require('url');
const queryString = require('querystring');
const connect = require('./2.connect');
var articles = {
    "1":"第一篇文章详情",
    "2":"第二篇文章详情",
    "3":"第三篇文章详情"
};
http.createServer((req,res)=>{
    //所有的程序都要使用的代码
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    //公共的业务逻辑
    if(pathname == '/'){
        res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
        res.end('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
    }else if(pathname == '/article'){
        res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
        res.end(articles[query.id]);
    }else{
        res.end('404');
    }
}).listen(8086);

