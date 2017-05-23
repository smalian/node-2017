const fs = require('fs');
var rs = fs.createReadStream('./pc.jpg'); //64k
var ws = fs.createWriteStream('./pc2.jpg'); //16k
var i=0;
rs.on('data',(data)=>{
    var flag = ws.write(data);
    console.log(flag);
});
ws.on('drain',()=>{
    i++;
    console.log('drain',+i);
});