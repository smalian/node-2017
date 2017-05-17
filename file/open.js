/**
 *  分块处理文件
 */
const fs = require('fs');
fs.readFileSync('line.txt');
//open 打开文件  openSync方法；，返回文件描述符
var fd = fs.openSync('line.txt','r');
console.log(fd); //3
//上边的fd为什么是3
/*
*   process.stdout.write(); 标准输出 0
    process.stdin; 标准输入
    process.stderr; 错误输出 2
 */

var buffer = new Buffer(3);
/*
readSync 方法，参数如下
* fd 文件描述符
* buffer 存放数据容器
* offset 往buffer里写的偏移量
* length 长度
* position 文件的当前读取位置
* */
fs.readSync(fd,buffer,0,3);
console.log(buffer.toString());