const fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    start:0,
    end:9,
    highWaterMark:3
});
var buffers=[];
rs.on('readable',()=>{
    console.log('=====readable=====');
    //console.log(rs.read(1));
    var buff;
    //文件流存在缓存区，要手动去读取，不然不会触发readable事件
    while(null != (buff = rs.read(1))){
        buffers.push(buff);
    }
});

rs.on('end',function(){
   var data = Buffer.concat(buffers);
   console.log(data.toString());
});