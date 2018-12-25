function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

/*

So let's move on talking more about functions,

context and another addition, variable environments.

Here's another phrase that's used when talking about JavaScript under the hood.

It's a lot more complicated sounding than it really is.

Variable environments?

Well, big word alert.

Variable environment is just talking about where the variables live that

you've created and how they relate to each other in memory.

So when you think about the variable environment just think about

where is the variable?

Let's move on from there.

Let's look at a piece of sample code.

Again I have two functions, a function B, and a function A.

Inside function B, I declare a variable called myVar.

And don't set it equal to a value.

In function A I set a variable called myVar also and set that equal to two.

And then outside the functions

I also declare a variable called myVar again, and set that equal to one.

Then A is called and inside A, B is called.

So what's going to happen?

What is the value of myVar at any point in time?

To answer that we need to think again about execution context.

What's happening as these functions are invoked?

So, at first what happens?

The global execution context is created and so

that bottom myVar is put into memory space.

In the case of the global execution context,

it's variable environment is the global object, or a window in a browser.

So then the code is executed and

that memory space will get a value of one when it hits that myVar = 1 line.

And then it hits the invocation of A.

And what happens?

A new execution context is created for A.

And when it's created, that myVar will be put into that

execution context variable environment.

See every execution context has its own variable environment.

And its value will then be two during the execution

phase when that line myVar = 2 is run.

Then, it invokes B, and a new execution context with its own variable environment.

Its own memory space for its variables is created.

And since it's not set equal to a value, myVar will be

put into memory with a value of, as you've learned before, undefined.

This has to do with something called scope.

Just means where are we able to see the variable?

Each variable that we are looking at is defined within its own

execution context, because it's within a function.

And every time you call a function you get your own execution context.

So even though the myVar Is declared three times.

They're distinct, they're unique, and they don't touch each other.

All right, let's prove that.

I've put my code into a JavaScript file, and

I've added some console.logs so we can see the values.

So we set myVar equal to one, log it.

Then call function A, which will create a new execution context

on the execution stack on top of the global execution context.

So this will be the running code.

It will create myVar in its own variable environment, log it.

And then we start another execution context by invoking a function and it will

put its own variable called myVar into its variable environment and we'll log that.

So, what should you expect to see?

Well, we're going to expect that we'd see this console.log happen first.

It runs A, so we'd see this one second.

And then it runs B, so we'd see this one third.

So I should see one, two, and what will be the value if I haven't set a value?

What value does the execution context creation phase set all variables to?

That's right the special value undefined.

So I should see one, two, undefined.

And so I'm going to go ahead and run this.

And open up the developer tools, go to the console and look.

One, two, undefined.

Exactly as we expected.

So, each of these myVars is sitting in its own execution context.

Calling this function didn't affect this myVar.

Watch, I'll console.log myVar after calling A.

Should that have an impact?

This answer is no, because once we finish A,

we're now the currently running code is the global execution context.

Where myVar is one.

So I shouldn't see another one when I console that log here.

Let's say that again.

This code is running inside the global execution context.

These variables are attached to the variable environment

of the global execution context.

So when I log this I see a one.

This calls, and this runs, and that's its own

execution context with its own variable environment, the same with B.

So when I leave B, A finishes.

And when A finishes I'm back to the global execution context because the B and

A execution contexts have been popped off the stack, they're gone.

The currently running context is the global execution context.

And what was myVar in that context?

One, so I'll save this, run it, and what should I see?

That's right.

One, two undefined, one.

See that?

One, because that's inside the global execution context.

Two, because that's inside A's execution context.

Undefined, because that's inside B's execution context.

And then one again,

because we're back to running inside the global execution context.

Got that?

Does it make sense?

Try this code out for yourself.

Mess around with it a bit.

See if you understand it.

Remember this is important.

And as we move on if you've got this concept down, it will reveal another

concept that's interesting, fundamental and often causes confusion.

But you are going to understand it.

Let's move on.

**/