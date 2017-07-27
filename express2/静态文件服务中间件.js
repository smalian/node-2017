/**
 * npm install ejs
 *
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname,'public'),{
    dotfiles:'allow',
    index:'ind.html',
    setHeaders:function(response){
        response.setHeader('name','zhaojun');
    }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.post('/post',(req,res)=>{
    res.send(req.body);

});
// app.use((req,res,next)=>{
//     let rs = fs.createReadStream(path.join(__dirname,'public',req.path));
//     rs.on('error',()=>{
//         next();
//     });
//     rs.pipe(res);
// });

app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);//设置用什么模板渲染html文件
app.get('/index',(req,res)=>{
    res.render('index.ejs',{
        name:'新宇',
        age:5
    })
});
app.listen(8086);

