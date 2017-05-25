/*
* 1.创建一个服务器
* 2.客户端可以连接服务器
* 3.客户端可以发言，然后广播给大家。
* 4.客户端连接和退出后都要通知大家
* 5.显示当前的在线人数
*/
const net  = require('net');
const util = require('util');
var clients = {};
var server = net.createServer((socket)=>{
    var nickname;
    socket.setEncoding('utf8');
    server.getConnections((err,count)=>{
        socket.write('欢迎光临，当前在线'+count+'人,请输入用户名\r\n>');
    })

    socket.on('data',(data)=>{
        data = data.replace(/\r\n/,'');
        if(nickname){
            broadcast(nickname,nickname+":"+data+'\r\n');

        }else{
            nickname = data;
            clients[nickname] = socket;
            broadcast(nickname,nickname+'加入了聊天室\r\n');
        }
    });
    socket.on('end',()=>{
        broadcast(nickname,nickname+'离开了聊天室\r\n');
        clients[nickname].destory();
        delete clients[nickname];
    });
    socket.on('error',(err)=>{
        console.log(err);
    });
    socket.on('close',(err)=>{

    });
});
function broadcast(nickname,msg) {
    for(var name in clients){
        if(nickname != name){
            clients[name].write(msg);
        }
    }
}
server.listen(8086);