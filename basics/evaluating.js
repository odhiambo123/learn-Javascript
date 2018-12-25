/*
A variable declared using the var or let statement with no assigned 
value specified has the value of undefined.

An attempt to access an undeclared variable results 
in a ReferenceError exception being thrown:



var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
// This one may puzzle you until you read 'Variable hoisting' below

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;


You can use undefined to determine whether a variable has a value. In the following 
code, the variable input is not assigned a value, and the if statement evaluates to true.

var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
**/