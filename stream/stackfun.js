// function fun1() {
//     var a1 = 1;
//     console.log('fn1',a1);
//     function fn2() {
//         var a2 = 2;
//         console.log('fn2',a1,a2);
//         function fn3() {
//             var a3 = 3;
//             console.log('fn3',a1,a2,a3);
//         };
//         fn3();
//     }
//     fn2();
// }
// fun1();
function add(a, b) {
    var c=1;
    console.log(a + b + c);
}
function sub(a, b) {
    var c=0;
    console.log(a - b -c);
}
add.call(sub, 3, 1);