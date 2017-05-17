const fs = require('fs');
var buffer = new Buffer(12);
fs.open('line.txt','r',(err,fd)=>{
    fs.read(fd,buffer,0,6,0,(err,byteRead)=>{
        console.log(byteRead);
        fs.read(fd,buffer,6,6,6,(err,byteRead)=>{
            console.log(byteRead);
            console.log(buffer.toString());
        });
    });
});
