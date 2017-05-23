/*
* 如何切换到流动模式
* 1.添加一个data事件处理器来监听函数
* 2.调用resume（）方法来明确开启数据流。
* 3.调用pipe（）方法将数据发送到一个Writable可写流。
*/
/*
 * 如何切换到暂停模式
 * 1.如果没有导流目标，调用pause()方法。
 * 2.如果有导流目标，移除所有data事件处理器，调用unpipe（）方法移除所有导流对象。
 *
 */
const fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    start:0,
    end:5,
    //encoding:'utf8', 专门的方法setEncoding（）可以设置编码
    highWaterMark:3
});
rs.setEncoding('utf8');
rs.on('data',(data)=>{
    console.log(data);
    rs.pause();
    setTimeout(function(){
        rs.resume();
    },3000)

});
rs.on('end',()=>{
    console.log('end');
});
rs.on('open',()=>{
    console.log('open');
});
rs.on('close',()=>{
    console.log('close');
});
