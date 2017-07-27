/**
 * npm install ejs
 *
 */
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views',__dirname);
app.get('/',(req,res)=>{
    res.render('index.ejs',{
        name:'新宇',
        age:5
    })
});
app.listen(8086);