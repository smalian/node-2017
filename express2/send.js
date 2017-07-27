/**
 * 接受客户端的参数数据
 *
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
