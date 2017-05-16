const fs = require('fs');
//两个异步执行的方法，如果我要获取这两个获得的数据，怎么办
//1.计数的方法 全局变量++,
//2.执行函数的方法，方法中判断两个数据是否存在if(data1 && data2)
/**
 *同步方式读取
 *
 * */
//如果不加编码格式，data会是buffer类型的
var data = fs.readFileSync('index.txt','utf8');
console.log(data);
//异步方式读取
fs.readFile('index.txt','utf8',function(err,data){
    console.log(1);
    console.log(data);
});
fs.readFile('index.txt','utf8',function(err,data){
    console.log(2);
    console.log(data);
});


