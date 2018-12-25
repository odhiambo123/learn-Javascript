b();

console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

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
**/
