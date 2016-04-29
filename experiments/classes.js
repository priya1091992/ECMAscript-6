/**
 * Created by priya on 28/4/16.
 */
class Shape {
  static a(){
    console.log("hello");
  }
}
Shape.a();  //hello

var obj=new Shape();
// obj.a();  //error: obj.a a is not defined
Shape.a();  //hello
//Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.


//_______________

//var Foo1=class {          //does not initialize like this
//  constructor() {}
//  bar() {
//    return "Hello World!";
//  }
//};
//
//var instance = new Foo1();
//console.log(instance.bar()); // "Hello World!"
//console.log(Foo1.name); // "Foo1"
