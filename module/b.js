// console.log('b开始加载');
// exports.loaded = function(){
//     console.log(module.loaded);
// }
// var a = require('./a.js');
//
function aa(){
    var mycitycode = "123";
    // $.get('data.json',function(d){
    //     $.each(d.adressindex,function(i,n){
    //         //				console.log(n);
    //         if(n.length>1){
    //             for(var y=0;y<n.length;y++){
    //                 if(n[y].areaname == mycity){
    //                     mycitycode = n[y].areacode;
    //                 }
    //             };
    //         }else{
    //             if(n[0].areaname == mycity){
    //                 mycitycode = n[0].areacode;
    //             }
    //         }
    //     })
    // },'json')
    return mycitycode;
}
var x = aa();
console.log(x);
