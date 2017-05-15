var person = require('./human');
var girl = new person('小龙女',18);
var boy = new person('杨过',28);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());
girl.setAge(60);
girl.setName('老龙女');
console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());


console.log(girl.home,boy.home);
console.log(girl.hasOwnProperty('home'));
girl.home = '上海';
console.log(girl.hasOwnProperty('home'));
console.log(girl.home,boy.home);