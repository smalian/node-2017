var EventEmitter = require('events');
var eve = new EventEmitter();

eve.on('data',out);


const fs = require('fs');
var person = {};

fs.readFile('name.txt','utf8',function(err,data){
    person.name = data;
    eve.emit('data');
});
fs.readFile('age.txt','utf8',function(err,data){
    person.age = data;
    eve.emit('data');
});
function out(){
    if(person.name && person.age){
        console.log(person.name,person.age);
    }
};
// var i=0;
// function eat(times,callback){
//     i++;
//     console.log(i);
//
//     if(i == 5){
//         callback();
//     };
//
// };
// var newEat = eat(5,function(){
//     console.log('吃完了');
// });
// newEat();
// newEat();
// newEat();
// newEat();
// newEat();


