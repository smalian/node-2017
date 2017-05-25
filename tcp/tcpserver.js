const net = require('net');
var util = require('util');

//net.socket 双工流 Duplux
var server = net.createServer({
    allowHalfOpen:false
},(socket)=>{
    console.log(util.inspect(socket.address()));
    //查看当前连接数量
    server.getConnections((err,count)=>{
       console.log(count);
    });
    socket.on('error',(err)=>{
        console.error(err);
        socket.destroy();
    });
    socket.on('close',(err)=>{
        console.error(err);
        socket.destroy();
    });

});
server.on('error',()=>{
    console.error(err);
});
server.listen(8086,'0.0.0.0',511,()=>{
    console.log(util.inspect(server.address()));
    // setTimeout(function () {
    //     server.close();
    // },2000);
});
server.on('close',()=>{
    console.log('server shutdown');
});
