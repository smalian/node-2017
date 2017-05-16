/**
 *
 */
const fs = require('fs');
fs.readFileSync('line.txt');
//open
var fd = fs.openSync('line.txt','r');
console.log(fd);

/*
*   process.stdout.write(); 标准输出
    process.stdin;
    process.stderr; 错误输出
 */

var buffer = new Buffer(3);
/*
* fd 文件描述符
* buffer 存放数据容器
* offset 往buffer里写的偏移量
* length 长度
* position 文件的当前读取位置
*
* */
fs.readSync(fd,buffer,0,3);
console.log(buffer.toString());