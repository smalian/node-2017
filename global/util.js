/*
 * util
 * */

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
Child.prototype = new Parent();
var child = new Child();
child.showName();
console.log(child === Object.prototype);