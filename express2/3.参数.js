/**
 * 接受客户端的参数数据
 * 1.query查询字符串
 * 2.路径参数
 * 3.请求体里req.body
 * 4.req.headers
 */

const express = require('express');
const app = express();
app.get('/query',(req,res)=>{
    res.send(req.query);
});
app.get('/article/:id/:name',(req,res)=>{
    res.send(req.params);
    //{id:'xxx',name:'xxx'}
});
app.all('/host',(req,res)=>{
    console.log(req.path);
    console.log(req.host);
    res.send('host');
});
app.listen(8086);