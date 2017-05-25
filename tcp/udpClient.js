const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
socket.send(new Buffer('赵俊'),0,6,41234,'localhost',(err,bytes)=>{
    console.log('发送了%d字节',bytes);
});
socket.on('message',function(msg,rinfo){
    console.log(msg.toString());
    console.log(rinfo);

});
