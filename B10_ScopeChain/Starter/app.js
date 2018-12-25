//think Lexical environment?
//the outer environment, global

function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();



/*

when you invoke a function.

The JavaScript engine creates an outer reference for

that execution context and it looks at where the code was physically sitting.

The syntax parser already knows because it went through line by line your code,

and it knows where that function was written.

And it then creates the appropriate outer reference

based on where your function was physically written in the JavaScript file.

Now this entire act of searching this chain of references to outer environments,

because this execution context stack could get really tall, and

maybe myVar is a ways down the stack.

It has to search one and then look for another outer environment and

search again until gets all the way to the bottom

where the global is where there is no outer environment to find myVar.

So if I had several more functions calling each other it would keep on moving down

until it hit global if those functions were defined inside each other.

Down those outer environment references until it finds it or doesn't.

That whole chain is called the Scope Chain.

Remember scope means, where can I access a variable.

And the chain is those links of outer environment references.

Lexical, that is where it was physically written in your code.

So, when we said inside function B console dot log MyVar it looked for

MyVar, couldn't find it, and went down the scope chain.

Now, it's going to go down the execution stack but

it jumps because it's not necessarily right below it.

The outer environment, in this case, lexically was global.

**/