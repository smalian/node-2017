const queryString = require('querystring');
var obj = queryString.parse('name=smain&who=mei');
console.log(obj);
var obj2 = queryString.parse('name@smain;who@mei',';','@',{
    maxKeys:2
});
console.log(obj2);
console.log(queryString.stringify(obj2));
console.log(queryString.stringify(obj2,":","@"));