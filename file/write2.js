/**
 * 写入文件 fs.write
 */
const fs = require('fs');
// fs.open('line.txt','w',(err,fd)=>{
//     fs.write(fd,new Buffer('珠峰培训'),6,6,0,(err,bytesWritten)=>{
//         console.log(bytesWritten);
//     })
// });

var buffer = new Buffer('珠峰培训');
fs.open('line.txt','w',(err,fd)=>{
    console.log(fd,1);
    fs.write(fd,buffer,6,6,0,(err,bytesWritten)=>{
        console.log(bytesWritten);
        fs.write(fd,buffer,0,6,6,(err,bytesWritten)=>{
            console.log(bytesWritten);
            fs.close(fd);
            fs.open('line.txt','w',(err,fd)=>{
                console.log(fd,2);
            })
        });
    })
});


