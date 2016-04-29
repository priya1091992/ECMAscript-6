/**
 * Created by priya on 28/4/16.
 */
function f (x, y, ...a) {

  console.log("helo")
  console.log("x:",x,"y:",y,"...a",a) // 1, 2, ["hello",true,7]
  return (x + y) * a.length;
}
console.log(f(1, 2, "hello", true, 7)==9);

//
var str = "foo";
var chars = [ ...str ] // [ "f", "o", "o" ]
console.log(chars);
var char=[str];
console.log(char);  //["foo"]
