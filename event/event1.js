/**
 * 时间
 * 订阅发布
 *
 * */
function Person(name) {
    this.name = name;
    this._events = {};
}
//注册监听
Person.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};
Person.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments, 1);//要执行的函数的名字的数组，例如：下边的‘长发及腰’；
    var callbacks = this._events[eventName]; //要执行的回调函数
    var self = this;
    callbacks.forEach(function (callback) {
        callback.apply(self, args);
    })
};

var girl = new Person;
girl.on('长发及腰', function () {
    console.log('我来娶你');
});
girl.on('长发及腰', function () {
    console.log('我撩你');
});
girl.emit('长发及腰');