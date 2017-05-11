/*process 方法
*
* */
//cwd current working directory 当前工作目录
//__dirname 文件所在目录、当前模块所属目录
console.log(process.cwd());
console.log(__dirname);
//change directory 改变进程当前目录
process.chdir('..');
//process.chdir(__dirname);
console.log(process.cwd());
console.log(__dirname);