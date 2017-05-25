const net = require('net');
var util = require('util');
const fs = require('fs');

//net.socket 双工流 Duplux
var ws = fs.createWriteStream('./socket.txt');
var server = net.createServer({
    allowHalfOpen: true
}, function(socket){
    console.log(util.inspect(socket.address()));
    socket.setEncoding('utf8');
    socket.setTimeout(10*1000);
    socket.on('timeout',()=>{
        socket.resume();
        socket.pipe(ws);
        ws.write(socket.address().address);
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
