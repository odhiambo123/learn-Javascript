function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);   
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i))
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


/*


If you research closures online you will inevitably run across this

example as far as why closures can make your code look hard to anticipate, but it

actually really isn't that true when you understand what's going on under the hood.

So we're going to pull up this example, we'll write it out,

then we'll examine it, and see if we can't have a clear understanding,

a clear expectation of what's going to happen when this code is run.

All right, so I'm going to go ahead and

write a new function called build functions.

And I'm going to create an empty array, remember that's array literal syntax,

I'm just creating an empty array and a for loop.

I'm gonna create a variable I, which is my counter.

As long as it's less than 3 I'll keep going.

So, I'll do this 3 times, and then I have my for loop.

Inside my for loop, I'm going to add something to the array, and

in JavaScript I can use .push, and that just means,

add this thing I'm about to put inside these parentheses to the array.

And what I'm going to put inside the array is a function.

Remember, arrays are functions of anything and that is that

arrays are collections of anything, so I can put functions inside of them.

So my function that's going to be put inside my array is just going to output I,

which is up here up at scope chain, its outer reference.

So, I'm going to do that three times.

I'm going to add three new function objects using these function expressions,

to an array.

So, when this is done, I'll have three functions inside my array.

Equivalent functions, identical functions, but three different functions,

and this function will just return that array.

Got it?

All right, so now that we have this, we see what's going on.

I'll just scroll down a bit here, and

I'm going to get that array by calling buildfunctions.

So now I have my array in this variable.

And then, remember that these are functions inside the array, so

I can reference an item, an element inside the array, the first one,

in this case, and then I'll call it.

And I'm going to do this for all three functions that are put inside the array

via that for loop, so let me just back this out a little bit.

Take a good look.

What do you expect this console.log to output in each of these three cases?

It's outputting i.

Now, you need to remember that this isn't invoking the function,

it's just creating it.

The function is invoked here, and then the other function here, and

the other function here.

So, these functions that are being created here are being invoked down here,

this is just creating them and putting them in the array.

So, when this function is actually invoked and it looks at I, and

it looks at its outer reference, what will I be?

All right so this is one of those things that tends to surprise people.

When you look at this code, what you might expect is to see 0, 1, 2.

Is that what you expected?

Or are you expecting something else?

Let's look.

Refresh, I got all threes.

Are you surprised by that?

Why would in every case, when it looks for i and

goes out to the outer reference, why would it find a three in all cases?

Well, maybe you've figured this out, but let's go ahead and

take a good look at what's happening under the hood.

So here's our code again.

We have buildFunctions that is pushing these functions into this array,

and then we call those functions at the bottom.

So we have an array of three functions at the end of this, and

each of them console.log's the value of i.

And when we ran this, everyone of those function calls logged three.

So why?

Well, how does the execution stack look like as this is happening?

Well, the global Execution Context is always there at the bottom and

it contains the build functions, and this variable we just called fs.

And so, we hit this line where it executes buildFunctions().

So, when buildFunctions() executes or is invoked,

we get an execution context, and it has two variables, i,

which was created on this for loop, and

arr, which we declared at the beginning of the function.

But what are the values of those two variables

by the time we hit the return statement?

Well, the for loop runs, and so,

i is at first 0, and it pushes the function into the array,

it adds this new function to the array right here.

But realize that console.log isn't being executed right here,

and that's where a lot of people get confused.

But, we already understand function expressions.

That all that's happening here is I'm creating a new function object and

putting that line of code into it's code property.

But it isn't actually running, it's just creating that object.

I haven't invoked the function.

So it continues, i becomes a 1, because of the i++.

It adds another function object into the array,

looks identical but it's a separate function object.

Then i becomes 2 because of the i++,

and we get a third function pushed into the array.

Then the i++ is run again, and i is 3, and

the engine sees that i is less than 3 expression,

and says oh, i is no longer less than 3, and leaves the for loop.

That's how for loops work, the i, that variable,

now is larger than my statement of when to leave the for loop,

so since that's now false, I leave the for loop,

but realize that i, its last value when i leave that for loop is now a 3.

That's what told me to leave the for loop.

So when i hit this return arr, what's in memory

in that execution context, is that i is a 3,

an array, that arr, holds 3 functions.

We'll just call them f0, f1, f2, but they're anonymous.

So then, we go back to the global execution context, and

this buildFunctions execution context is popped off the stack.

But what have we learned before?

What's in memory is still hanging around.

So now we hit this first function call where I take the first element

in the array, which is a function, and execute it.

The code in the code property is council.log(i),

so its execution context is created.

There is no variable i inside of its code, so it goes up the scope chain.

It goes to its outer reference.

Where was it created?

Inside build functions, and what is inside the memory

that used to be in the build functions execution context.

I is 3.

So it says, all right, console.log3, and then it finishes.

We move on to the next function, the next one inside the array,

and an execution context is created, but

that one has the same outer environment reference,

because it was created in the same place as the first function.

Physically it's sitting in the same spot, inside the same build function.

So its outer environment reference,

because of its position physically in the code,

because of it's left position, is to the same spot in memory as the first one.

And so when it looks for i, it looks at that same spot in memory,

where the build functions held its variables, and sees a three.

So console.log(i) results in a three, and the same thing for the third function,

they all point at the same memory spot going up the scope chain

because they were all created inside the same function, buildFunctions.

So all three of these have the same parent so to speak.

This would be like three children and you ask them how old is their father.

They're not gonna tell you how old their father was when each of them was born.

They're each gonna give you the same answer, how old their father is now.

In the same way, we have three functions that are being executed later,

so when we execute the function, it's only going to be able to tell you

what the value is in memory of its parent

context of that outer environment reference.

It's only going to be able to tell you what's in memory right now,

not at the time that we created the function.

Only right now when we're actually executing the function.

And so all three output the same thing

because all three are pointing to that same location in memory.

We're doing exactly what we're telling the JavaScript engine to do.

At first glance, this may look weird, but as soon as you realize that,

that console.log isn't executed right there where it's sitting, but

executed when we invoke these functions.

When we look behind the scenes instead of looking at purely what we're

writing in the code, this makes sense, it makes total sense.

The value of I is what it is at the moment that I execute the function.

Makes sense?

Look at this, look at the code yourself, write the code out, think about it.

This example that you see all over the internet isn't really that tough

if you really stop and ponder it just for a bit.

I is three by the time you call all these functions, and

so that's what they're going to output.

Got that?

All right, moving on.

We've seen that first class functions plus this language feature of closures,

where when I execute the function it still has access to the outer variables.

By the way, these are also called free variables.

A free variable is a variable that is outside a function, but

that you have access to.

So it closes in, it wraps up these variables, and

at the point of execution, all three of these functions,

because they're sitting in the same spot, are going to be

pointing to the same memory space where these outer variables were located.

And you might ask the question, well what if I did want this to work?

What if I did want this to do what I just said, to output zero,

then a one, then a two?

Well there's a couple ways to approach that.

Let's just move ourselves down a bit.

And we'll call this buildFunctions2, and fs2, just so

we'll have them separate in the same code here.

And I'll call it buildFunctions2.

All right, what's coming to JavaScript



with ES6 is that let variable, remember we said that.

So I could do something like this, in console.log j.

What happens here will be that the let variable that's created,

is scoped to the block, so, inside these curly braces.

So every time the four loop runs, this will be a new variable in memory.

And it will be segmented in the side of memory of this execution context so

that when this function is called, it would be pointing each time

at a different spot within that memory.

These are subsegmented essentially as separately scoped variables.

So new JavaScript functionality lets us do it this way, however how could we do it

with the ES5 that is the current version of JavaScript functionality.

Well, in order to preserve the value of i for

this function I'm going to need a separate execution

context for each of the functions that I'm pushing into the array.

I need a parent scope that holds the current value of I as the loop goes.

So, the only way to get an execution context is to execute a function.

So, how can I execute a function on the fly?

Do you remember?

An immediately invoked function expression is a nice, clean way to do that.

So I can make a function.

Let's say I give it a variable j.

I'm going to create it and then execute it, and give it i.

So, now I have an immediately invoked function expression.

See that? I had an extra parenthesis there.

I'm going to put this inside Either one is valid.

And so now I have a function, and I'm passing i.

So what's going to happen?

Well every time the loop runs, it's going to execute this function,

passing 0, then it's going to execute a new one, passing 1,

then it's gonna execute a new one, passing 2,

and each of those executions creates its own execution context, and

j will be stored in each of those three execution contexts.

So I'll have j as zero, and another execution context where j is one, and

a different execution context where j is two.

And even though those execution contexts will go away after this line is run,

we know thanks to closures, that J, all those three Js for

those three different execution contexts will be hanging out.

So I can just return function, console.log(j).

Whoa, that's kinda crazy right?

But look, we're doing a push and

this push is going to push the result of executing this function

and executing this function gives us back a function.

See that?

I'm pushing the result of this function and when this function runs,

it gives me this so that's what get's pushed into the array.

Then when this gets executed, and it looks for j,

it doesn't need to go all the way out up into this for loop.

It'll just go out to this execution context.

j will store the value at that moment it was executed in the loop.

So I should see what I originally thought I was going to see,

and there it is 0, 1, 2.

So that's a way to use closures to our advantage

to make sure that we have the values that we need when we execute this

inner most function later on down here at the bottom of our code.

So, take a good look at this code.

Make sure that you understand it.

We're using all of these things that we've learned up to this point when it comes to

first class functions, closures, and all of these ideas.

If you get this, you're understanding the fundamental

aspect of advanced JavaScript programming.

And function closures can be useful in other ways.

All right, let's move on.
**/