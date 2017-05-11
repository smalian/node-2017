process.on('uncaughtException',(e)=>{
    console.log('uncaughtException',e.message);
})
/**
 * global == window
 * module 当前导出模块
 * exports 导出对象
 * require
 * __dirname当前模块所在的目录的绝对路径
 * __filename当前模块的绝对路径
 * setImmediate clearImmediate
 * pid 进程ID
 * process 当前的进程对象
 */
function x(module,exports,require,__dirname,__filename){
    // var name = 'smain';
    // console.log(this); //{}

    exports.name = 'smain';
    console.log(this);  //{name:'smain'}
}

    //console.log(a)中的a是从查找
    //1.当前模块的内部声明的变量（包括引入的模块）
    //2.全局对象
    //3.从外界传入的参数
process.stdout.write('hello');
console.log(process.pid);
process.stdin.on('data',(data)=>{
    console.log(data.toString());
});
//自己把进程杀死会执行下边的函数，比如程序出现错误，会执行
//别的程序把自己杀死，不会执行下边的函数:console.log(a); a未定义

process.on('exit',()=>{
    console.log('退出前执行');
});

try{
    console.log(a);
}catch(e){
    console.log(e.message);
}

console.log(b);