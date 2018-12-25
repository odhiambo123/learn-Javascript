function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);
/*

remember the two phases
creation phase first
then execution context within the JavaScript engine.

The first phase was the creation phase when it set up the variables and

functions and memory.


In the execution phase we already have all those things set up that we had before.

And now it runs your code, the code you've written,

line by line, interpreting it, converting it, compiling it,

executing it on the computer into something the computer can understand.


And it runs your code line by line.

So if I go back to our example that we used for hoisting, and



I'm logging a.

I'm setting a equal to a value and declaring it, and I'm logging a again.

So, what do you think we're going to see?

B will be called, then a will be logged, and a will be logged again.

We're gonna see three lines because console.log is also called.

So what are the three lines?

What's the line here?

What are we gonna see here?

And what are we going to see here?

All right. Let's go ahead and run this refresh.

Did you get it right?

Called the function.

The first time it called a, it got undefined, and

the second time it got Hello World.

Why?

Because now we're in the execution phase, so in the creation

phase we set up this function and var a was set up and set equal to undefined.

And now it begins to execute code.

So, line five is executed, and it runs that function.

Line seven is executed, and it outputs the value of a to the console.

And since a was set to undefined in the creation phase, that's what we see.

And it executes line nine and

sets the value in memory of a to the string Hello World!

And then, in line 11, it once

again outputs the value of a in memory to the console which is now Hello World.

So it just executed these things line by line.

And we understand between these two phases, the creation phase and

the execution phase, now, why we see what we see and

why JavaScript behaves the way it does.



explanation 


It's time for another conceptual aside when it comes to JavaScript.

This one is single threaded, synchronous execution.

So, we have two rather large looking terms, so guess what?

Big word alert.

First of all, single threaded.

It sounds pretty complicated but it's easy to understand.

That means that one command is being executed at a time.

So any program is full of many commands.

Many commands within the code.

Single threaded execution means you're only doing one at a time.

Now, when we're dealing with browsers,

understand that JavaScript isn't the only thing happening in the browser.

So, when we say JavaScript is single threaded, It may not be

under the hood of the browser, but from our perspective as programmers,

JavaScript behaves in a single threaded manner.

All right, the next one.

And once again, big word alert.

Synchronous, this is very similar to single threaded.

Synchronous meaning, in the purposes of programming, one at a time.

Not two at a time or three at a time.

But one line of code being executed for

synchronous execution at a time and, for our purposes, in order.

So the code is executed one line at a time in the order that it appears.

And that's it. Single threaded synchronous execution,

meaning that in JavaScript, only one thing is happening at a time.

Now I know what you're probably thinking, but hey,

I've heard of asynchronous requests in JavaScript, especially on the web.

AJAX, the A stands for asynchronous.

What are you talking about?

Well, we'll see that in just a little bit, but for now, just trust me.

JavaScript is single threaded, synchronous execution in its behavior.



INVOCATION and EXECUTION STACK

functiion b() {
	
}

function a() {
	b();
}

a();


All this time we've been talking about the global execution context and

how it's created and executed.

But we also mentioned that functions are special in regards to this.

Here we'll talk about function indication and the execution stack.

And we're going to introduce this concept that will be fundamental to

understanding some very important advanced concepts in JavaScript.

Before we do that, though, we've rather casually used a word here,

a word that sounds a lot more complex than it really is.

Big word alert- invocation.

That just means running a function or calling a function.

So when we say we invoke the function or

function invocation, we just mean hey, run the function.

In JavaScript, we do that by using parenthesis.

Put the name of the function, and then put parenthesis.

When you did that, you invoked the function.

You told the JavaScript engine to run it.

So now let's talk about what happens when you invoke a function in JavaScript.

To do that, let's look at a simple example.

So I have a function b that I've created, it does nothing.

A function a that calls, or invokes function b.

And then I'm invoking function a.

This is a very simply example but

it helps us to understand what's happening under the hood.

Now here comes this fundamental very important concept.

Let's step through what we know is going to happen first

If I put this code in a JavaScript file and ran it.

First of all, what's going to be created?

That's right- a Global Execution Context.

The parser will parse the code and then the compiler,

the program that's going to interpret your code, will start up and

say, well I need to create a Global Execution Context.

It'll create the variable this, it'll create a global object,

if you're in the browser it will create a window object, and

then it will attach these functions to it.

It will set up the memory space for

them in the creation phase of the execution context, that first phase.

So b and a will be in memory, and then the code will be executed line by line.

Now, it won't execute anything in those functions because

they haven't been invoked.

But when it hits a at the bottom and it says I'm supposed to invoke or

call or run that function a.

Here's the thing that actually happens.

A new execution context is created and

placed on what's called the execution stack.

And a stack is just what it sounds like,

one on top of the other on top of the other.

And whichever one is on top is the one that's currently running.

So anytime you execute or invoke a function in JavaScript,

a new execution context is created and put on the execution stack.

So the execution context is created, just like the global one.

It will have it's own space for variables and functions.

It will go through that create phase, and

then it will execute line by line the code within the function.

However, if I have another function invocation,

it's going to stop at that line of code and

create another execution context and run that code.

Now in the case of b, there is no code to run,

but this is how function invocation happens in JavaScript.

Every function creates a new execution context which runs through

the create phase then executes the code line by line within the function.

When b finishes, because it's at the top of the stack,

it will get popped off the stack, then a, then back down to Global.

Notice that this doesn't matter.

The order lexically doesn't matter.

Nor does the rest of the code that happens to be surrounding those function calls.

For example, let's suppose we put a above b and

function a() {
	b();
}

functiion b() {
	
}

a();

we had some other code surrounding these function calls.

That doesn't matter.

Because even though lexically a is above b, remember what's happening.

Both of those functions are already in memory during the create phase

of the initial global execution context.

Those "var c," "var d" that you see down below each of those function calls,

let's talk about what's gonna happen.

First of all, a at the bottom will invoke function a.

So, that will be the next put on the execution stack.

The execution context for the function a.

Then, that becomes the currently running code which means that very last

line at the bottom, var d below the a, that's not going to be run yet.

Because JavaScript is synchronous, one line at at time.

And what's running is the current code within the current execution context.

Which is the one at the top of the stack.

So when a is at the top of the stack, it will start to run line by line.

It hits that line where it invokes b.

B creates a new execution context, so that becomes the top of the stack, and

so it is running line by line.

And it runs its single line of code there, and

only when it finishes will we go back to finishing a.

Why? Because when the function finishes,

the execution context is what's called popped off of the stack.

So now, what's the current execution context again?

a.

So it runs the next line of code that hadn't yet

been run inside that execution context.

Meaning that var c line.

And then, when a is finished, it's popped off the stack.

And the next line of code that hasn't yet

been run in the global execution context is run, which is that very last var d.

See how that works?

Every time a function is called,

a new execution context is created for that function.

The this variable is created for that function.

The variables within it are set up during the creation phase.

And the code is executed line by line.

But every time a function is invoked, even if it's invoking itself,

a new execution context is created, put on top of the stack, and

then when the function finishes, it's popped off.

And whatever's at the top is what's currently running.

Line by line, synchronously.

This concept is very important to have in your mind as your mental model for

what's happening as you're invoking functions.

Because it has to do with the rest of what we're going to discuss.
**/

