const fs = require('fs');
var rs = fs.createReadStream('./read.txt');
var ws = fs.createWriteStream('./write.txt');
rs.pipe(ws);//原理如下
// rs.on('data',(data)=>{
//     var flag = ws.write(data);
//     if(!flag){
//         rs.pause();
//     }
// });
// ws.on('drain',()=>{
//     rs.resume();
// });