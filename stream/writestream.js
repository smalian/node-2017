const fs = require('fs');
var rs = fs.createReadStream('./read.txt');
var ws = fs.createWriteStream('./write.txt',{
    autoClose:false
});

ws.on('open',()=>{
    console.log('写入文件open');
});
rs.on('data',(data)=>{
    ws.write(data);
});
rs.on('end',()=>{
    //可写流的end事件，关闭文件标识符，出发可写流的close事件
    ws.end('写入完成',()=>{
        console.log('写入完毕');
        console.log('共写入%d字节',ws.bytesWritten);
    });
});
ws.on('close',()=>{
    console.log('文件写入关闭');
});