
'use strict'

//constants have block level scope
//A constant cannot share its name with a function or a variable in the same scope.
const a1=10;
// const a=20; //duplicate declaration
{
  const a1=20;
  console.log(a,"In block"); //20
}
console.log(a,"In outer block") //10


//**********const with values and objects****************************
const a=10;
console.log(a); // prints value 10

//const a=20; //gives an error 'Duplicate value declaration'

const obj={
  name:"priya"
}

///*const obj={       //duplicate declaration obj
// name:"priya",
// age:24
// }*/

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

//********************with classes*****************
class alpha1{

}
const obj2=new alpha1();
var obj3=new alpha1();
//obj2=obj3;// error


//************************** class functions can be override*********

class test{
  atest(){
    console.log("this is first");
  }

  atest(){
    console.log("this is second");
  }
}

var testobj=new test();
testobj.atest();   //this is second  (the function here is override)

//___defining constants in classes_________________

// {
// const constant1 = 33,
//       constant2 = 2;
// }

  const constant1 = 33,
    constant2 = 2;

class Example {

  static get constant1() {
    return constant1;
  }

  static get constant2() {
    return constant2;
  }
}

const one = Example.constant1;  //constant1 is not defined if defined in block level scope
const one1 = Example.constant2; //constant2 is not defined if defined in block level scope
console.log(one);  //33
console.log(one1); //2
