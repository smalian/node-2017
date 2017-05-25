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
    //end:false 客户端停止，写入时也不关闭目标文件
    socket.pipe(ws,{end:false});
    socket.on('end',()=>{
        ws.end('再见');
        socket.unpipe(ws);
    })

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
