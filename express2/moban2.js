/**
 * npm install ejs
 *
 */
const express = require('express');
const app = express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);//设置用什么模板渲染html文件
app.get('/',(req,res)=>{
    res.render('index.ejs',{
        name:'新宇',
        age:5
    })
});
app.listen(8086);
