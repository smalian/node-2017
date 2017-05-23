const fs = require('fs');

var ws = fs.createWriteStream('./test2.txt',{
    highWaterMark:1024
}); //16k
writeMillion(ws,'data','utf8',function(){});
function writeMillion(writer,data,encoding,callback) {
   var i=1000000;
   write();
   function write() {
      let ok = true;
      do{
          i-=1;
          if(i == 0){
              writer.write(data,encoding,callback);
          }else{
              ok = writer.write(data,encoding);
              console.log(ok);
          }
      }while(i>0 && ok);
      if(i>0){
          writer.once('drain',write);
      }
   }
}