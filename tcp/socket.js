const net = require('net');
var util = require('util');

//net.socket 双工流 Duplux
var server = net.createServer({
    allowHalfOpen: true
}, function(socket){
    console.log(util.inspect(socket.address()));
    socket.setEncoding('utf8');
    socket.on('data', function(data) {
        console.log(data);
        console.log('已经收到%d个字节',socket.bytesRead);
        socket.write('客户端已收到'+data);
    });
    socket.on('close',(err)=>{
        console.log('close',err);
    });
    socket.on('end',(err)=>{
        console.log('end',err);
    });

});
server.on('error', (err) => {
    console.error(err);
});
server.listen(8086,() => {
    console.log(util.inspect(server.address()));
    // setTimeout(function () {
    //     server.close();
    // },2000);
});
server.on('close', () => {
    console.log('server shutdown');
});
