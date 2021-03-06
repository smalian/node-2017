/**
 *readFileSync 读取文件
 **/
const fs = require('fs');
/**
 *  path 文件路径
 *  options
 *  encoding 文件的编码
 *  flag
 **/
/**
 *  O_RDONLY  只读
 *  O_SYNC  同步
 *  O_RDWR  可读可写
 *  O_TRUNC  truncate 清空文件
 *  O_CREAT  如果没有就创建
 *  O_WRONLY  只写
 *  O_EXCL  excludsive 排他操作
 *  O_APPEND  追加
 **/
var data = fs.readFileSync('index.txt',{encoding:'utf8',flag:'r'});

fs.readFile('index1.txt',{encoding:'utf8',flag:'w'},(err,data)=>{
    if(err) console.error(err);
})