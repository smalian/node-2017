const net = require('net');
const util = require('util');

var socket = new net.Socket({allowHalfOpen:true});
socket.setEncoding('utf8');

socket.connect(8086,'localhost',()=>{
    socket.write('hello');
    socket.on('data',(data)=>{
        console.log(data);
    })
});
