
//前边加ox表示数字是16进制的
var buf1 = new Buffer(3);
console.log(buf1);
buf1.fill(0);
console.log(buf1);

buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;


var buf2 = new Buffer([0x61,0x62,0x63]);
var buf3 = new Buffer("abc");
console.log(buf1.toString() == buf2.toString());
console.log(buf2.toString() == buf3.toString());


var buf4 = new Buffer('a','utf8');
console.log(buf4);
var buf5 = new Buffer('a','ascii');
console.log(buf5);


//buffer和字符串的length
var str = '新宇哈哈';
var buf = new Buffer(str);
console.log(str.length);
console.log(buf.length);
console.log(buf.toString('utf8'));

//字符串与buffer修改元素
str[0] = '天';//不能修改成功
console.log(str);
console.log(buf);
// buf[0] = 0;//可以修改成功
// console.log(buf);


var newStr = str.slice(1);
var newBuf = buf.slice(1);
newBuf[1] = 5;
console.log(buf);

//buf.write方法
 var buf8 = new Buffer(12);
 buf8.write('珠峰',0,6);
 buf8.write('培训',6,6);
 console.log(buf8);
 console.log(buf8.toString());


var buffer66 = new Buffer('新宇旭旭');
var buf9 = buffer66.slice(0,7);//7
var buf10 = buffer66.slice(7);//5
console.log(buf9.toString());
console.log(buf10.toString());


//node string
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf9));
console.log(decoder.write(buf10));

//buffer copy
var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf,3,0,3);//把srcBuf里边的内容复制到tarBuf中

console.log(tarBuf);

//buffer concat
var buf11 = new Buffer([1,2,3]);
var buf12 = new Buffer([4,5,6]);
var buffer13 = Buffer.concat([buf12,buf11],9);
console.log(buffer13);
