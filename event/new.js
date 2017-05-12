/**
 * Created by APPLE on 2017/5/12.
 */
function Person(){
    this.name = 'smain';
    //return {name:'nb'};
};

/**
 * new 方法
 * 1.创建空对象
 * 2.把空对象传入this
 * 3.返回这个对象
 * */

var p = new Person;
console.log(p.name);
var P2 = Person.bind({});
var p2 = new P2;
console.log(p2.name);