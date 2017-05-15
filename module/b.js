console.log('b开始加载');
exports.loaded = function(){
    console.log(module.loaded);
}
var a = require('./a.js');

