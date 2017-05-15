var person = require('./person');
console.log(require.cache); //require过来以后缓存在cache中;
delete require.cache[require.resolve('./person')];
var person = require('./person');
//console.log(require);
person.welcome('smain');

/******
 * 1.核心模块http fs
 * 2.通过路径加载
 * 3.
 *
 * ******/