//the execution context is  created in two phases creation phase of execution context and execution phase
//1 creation phase: the parser runs through the code to see what you have so it sets up memory spaces for the code.
//so your functions and code exists in the engine. and places place holders in the variables undefined
//in the execution phase your code is run line by line. and if you dont asing a value to the variable, the one set by default
//during creation phase will be asigned to the variable. undefined
b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}