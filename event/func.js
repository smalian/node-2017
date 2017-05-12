//柯里化函数
function say(name,word){
    console.log(name,':',word)
};
say('smain','like Jun');
//如果name都是一样的。怎么简化呢
//1.bind
//var newSay = say.bind(this,'smain','like');
//2.
function newSay(){
    say.apply(null,['smain'].concat(Array.prototype.slice.call(arguments,0)));
}
newSay('love you ');