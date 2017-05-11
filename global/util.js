/*
 * util
 * */
const util = require('util');
function Parent() {
    this.name = 'father';
    this.age = 6;
    this.say = function () {
        console.log('hello', +this.name);
    }
}
Parent.prototype.showName = function () {
    console.log(this.name);
};

function Child() {
    this.name = 'child';
};

//继承方法1：不能传参，会继承私有方法
//Child.prototype = new Parent();
//Child.prototype = object.create(parent.prototype);
util.inherits(Child,Parent);
var child = new Child();
child.showName();
console.log(child.__proto__.__proto__.__proto__ === Object.prototype);



function Person(){
    this.name = 'smain';
    this.parent = {
        name:'parent'
    }
};
Person.prototype.toString = function(){
    console.log('my name is'+ this.name);
}
var p = new Person();
p.toString();
/*
* showHidden 是否显示隐藏属性
* depth 对象的递归显示深度
* colors 是否显示颜色
* */
console.log(util.inspect(p,true,true,true));


var arr1 = [1,2];
var arr2 = [3,4];
Array.prototype.push.apply(arr1,arr2);
//相当于
arr2.push(3);
arr2.push(4);
console.log(arr1);
console.log(arr2);

//judge type of the object
console.log(util.isArray([1,2]));












