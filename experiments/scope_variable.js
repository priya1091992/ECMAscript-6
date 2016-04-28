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
