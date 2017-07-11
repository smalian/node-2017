/**
 * 1.安装
 *  npm install express
 *  2.获取和引用
 */

const express = require('express');
var app = express();
app.get('/list',(req,res)=>{
    res.send('list'+req.url);
});
app.post('/list',(req,res)=>{
    res.send('post'+req.url);
});
app.all('/all',(req,res)=>{
    res.send('post'+req.url);
});
app.all('*',(req,res)=>{
    res.send('此页面走丢了');
});
app.listen(8086);