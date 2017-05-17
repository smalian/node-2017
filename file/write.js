const fs = require('fs');
//异步方式把字符串写入文件
//read r write w execute x
//读 4     写 2     可执行1  （0-7）表示所有方式
//-rw-  自己创建者拥有的权限
// r--  所属组
// r--  其他人
fs.writeFile('line.txt','第一行',{
    flag:'w',
    encoding:'utf8'
},(err)=>{
    if(err) console.error(err);
});

fs.writeFile('line.txt',new Buffer('第二行'),{
    flag:'a',
    encoding:'utf8'
},(err)=>{
    if(err) console.error(err);
});

fs.appendFile('line.txt',new Buffer('第3行'));
console.log(Math.pow(2,6)-1);//0-63
/*
* base64 加密解密
* base64是把三个8位字节转换成4个6位字节，然后再6位字节前补两个0；
*
* */
var buf = new Buffer('新');
console.log(buf);

console.log(parseInt('e6',16));//把16进制转换成10进制
console.log(parseInt('96',16));
console.log(parseInt('b0',16));
console.log((230).toString(2));//把10进制转换成2进制
console.log((150).toString(2));
console.log((176).toString(2));
//11100110    10010110     10110000
//00111001   00101001   00011010   00110000

console.log(parseInt('00111001',2));//57
console.log(parseInt('00101001',2));//41
console.log(parseInt('00011010',2));//26
console.log(parseInt('00110000',2));//48

var str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str[57]+str[41]+str[26]+str[48]);