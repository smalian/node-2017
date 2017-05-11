/**
 * Created by APPLE on 2017/5/11.
 */
//运行查看事件循环机制的执行顺序
    //nextTick > setTimeout > setImmediate > IO异步
const fs = require('fs');
fs.readFile('a.txt',(err,data)=>{
    if(err){
        console.error(err);
    }else{
        console.log(data.toString());
    }
});

setTimeout(()=>{
    console.log('a setTimeout');
});
process.nextTick(()=>{
    console.log('a1 nextTick');
    process.nextTick(()=>{
        console.log('b2 nextTick');
    });
});
setImmediate(()=>{
    console.log('a1 setImmediate');
    setImmediate(()=>{
        console.log('b2 setImmediate');
    });
});
