
'use strict'

//**********const with values and objects****************************
const a=10;
console.log(a); // prints value 10

//const a=20; //gives an error 'Duplicate value declaration'

// var obj={
//   name:"priya"
// }

// var obj={        // allow to declare new object with the same name
//   name:"abc",
//   age:24
// }

const obj={
  name:"priya"
}

/*const obj={       //duplicate declaration obj
 name:"priya",
 age:24
 }*/

obj.name='alpha'  //allow to change the values of object but doesnot allow to reinitialize the object
const obj1={
  name:"priya"
}

obj.age=24; //work fine
//obj=obj1;   //obj is read-only only

console.log(obj); //name: 'alpha', age:24;


//********************** with arrays******************************

const arr=[1,2,3];
arr[1]=12;
arr[3]=4;
console.log("array",arr);

//arr=[12,3];  //error  arr is read-only property

console.log("array changed", arr);


//*************** with functions******************

//const function abc(){   //gives an error... doesnot work with functions
//
//}

const aa=function(){
  let def='klm';
  console.log(def);
}

aa();

const ab=function(){
  console.log('def');
}

ab();

//aa=ab;  //error

/*const aa=function(){  //duplicate declaration of a function

 }*/

