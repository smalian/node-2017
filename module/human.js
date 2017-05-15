var person = function(name,age){
    this._name = name;
    this._age = age;
};
person.prototype.getName = function () {
  return this._name;
}
person.prototype.setName = function (name) {
    this._name = name;
}
person.prototype.getAge = function () {
    return this._age;
}
person.prototype.setAge = function (age) {
    this._age = age;
};
person.prototype.home = '北京';
//导出有引用值的对象的时候要用module.exports;
module.exports = person;