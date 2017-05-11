/**
 * nexttick
 *
 */
console.log('a客人');
//下一个时间队列执行,nextTick放在第一个事件循环底部，setTimeout放在第二次事件循环顶部
//nextTick比IO异步优先级高
setTimeout(()=>{
    console.log('a扫地 setTimeout');
},0);
process.nextTick(()=>{
   console.log('a扫地 nextTick');
    process.nextTick(()=>{
        console.log('a扫地 nextTick2');
        process.nextTick(()=>{
            console.log('a扫地 nextTick3');
        });
    });
});
//console.log('a扫地');
console.log('b厨师');
console.log('c厨师');