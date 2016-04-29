/**
 * Created by priya on 28/4/16.
 */
let a=10;
var b=20
{
  let c=30;
  var d=40;
  console.log(a,b,c,d); //10 20 30 40
  a=50;   // after change
  b=60;
  console.log(a,b,c,d); //50 60 30 40
}
//console.log(a,b,d); //10 20 40
console.log(a,b,d); // 50 60 40 after changed
//console.log(a,b,c,d); // error : c is not defined


//>>>>>>>>>

//var x=10;
//var x=20; //ok
//let b=10;
////let b=20;// error duplicate declaration
//b=30; //ok

//>>>>>>>




/* in es5
"use strict";

 var a = 10;
 var b = 20;
 {
 var _c = 30;
 var d = 40;
 console.log(a, b, _c, d); //10 20 30 40
 a = 50; // after change
 b = 60;
 console.log(a, b, _c, d); //50 60 30 40
 }
 //console.log(a,b,d); //10 20 40
 console.log(a, b, d); // 50 60 40 after change

 //console.log(a, b, c, d); // c is not defined*/



//*******************************another example*******************
let callbacks = [];
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () {
    return i * 2;
  }
}
console.log(callbacks[0]() === 0);  //true
console.log(callbacks[1]() === 2);  //true

// if defined as var in loop
//let callbacks = [];
//for (var i = 0; i <= 2; i++) {
//  callbacks[i] = function () {
//    return i * 2;
//  }
//}
//console.log(callbacks[0]() === 0);  false
//console.log(callbacks[1]() === 2);   false

//In es5 the problem is resolved as
//"use strict";
//
//var callbacks = [];
//
//var _loop = function _loop(i) {
//  callbacks[i] = function () {
//    return i * 2;
//  };
//};
//
//for (var i = 0; i <= 2; i++) {
//  _loop(i);
//}
//console.log(callbacks[0]() === 0);
//console.log(callbacks[1]() === 2);

