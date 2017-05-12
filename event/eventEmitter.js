/**
 * Created by APPLE on 2017/5/12.10:38
 */
const EventEmitter = require('events');
const util = require('util');
function Bell(name) {
    this.name = name;
};
util.inherits(Bell, EventEmitter);
var jinglebell = new Bell('jingle');
jinglebell.on('ring', function () {
    console.log('收到礼物');
});
jinglebell.addListener('ring', function () {
    console.log('收到礼物2');
});
function drop(thing){
    console.log(thing+'礼物丢掉了');
};
jinglebell.once('drop',drop);
//jinglebell.removeListener('drop',drop);
//jinglebell.removeAllListeners('ring');  //解除ring的所有函数
jinglebell.emit('ring');
//jinglebell.emit('drop');//无参数
jinglebell.emit('drop','鹿');//有参数
jinglebell.emit('drop');
console.log(jinglebell.listeners('ring'));