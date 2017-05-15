console.log('a开始加载');
exports.loaded = function(){
    console.log(module.loaded);
};
var b = require('./b.js');
exports.name = 'smain';