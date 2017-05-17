
const fs = require('fs');
// fs.write(2,'珠峰培训',(err)=>{
//
// });



setTimeout(function(){
    var buffer = new Buffer(10);
    fs.read(0,buffer,0,1,0,(err)=>{
        console.log(buffer);
    })
},3000);