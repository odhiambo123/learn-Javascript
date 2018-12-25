function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);


/*



After all the discussions of first class functions and

all these other features in JavaScript, we're ready to discuss one of my

favorite topics when it comes to the JavaScript programming language.

It's called Functional Programming.

Although JavaScript sounds like it's related to the Java programming

language and looks like the C++ C# Java languages a bit.

It really has more in common in many ways with

other languages called functional programming languages.

Languages like Lisp or Scheme or ML.

These are languages that have first class functions like we've talked about.

Functions that behave as objects.

You can pass them as parameters.

You can return them from functions.

And so, having first class functions in a JavaScript programming language

means that we can implement what's called functional programming.

Where we think and code in terms of functions.

This is one of my favorite topics because it introduces an entirely different way of

thinking and implementing when programming.

And introduces an approach that you simply can't

do in other programming languages that don't have first class functions.

So let's take a look at some examples of the beauty of functional programming.

We'll start with a simple array.

I'll put a few numeric values in an array and I'll just log is so

that we can keep track of what we're doing, and

let's suppose my task here is to create a new array out of this first array.

So I need to loop over all of the items in the array.

Let's say array 1.length, there's a length property,

how big big it is, how long it is, and

I'm going to use the push property of the method

to let's say double each value in this first array.

I'm creating a second array that has each

item double the value of its equivalent item in the first one.

So I loop over each item, and I push a value that's times 2 of that.

I get 1, 2, 3, and then my new array is 2, 4, 6.

I had to write of code to do that.

And we know that as programmers, we want to always minimize how much work we're

doing, how much typing we're doing and how often we're repeating ourselves.

We tend to put things into functions in order to do that,

to limit repetition, we put work into functions.

In programming languages where functions aren't first class,

there is limitations to how much you can put into a function,

to how granularly you can segment your code.

However, with first class functions we an do something entirely different.

We can head toward functional programming.

So let's say, for example, I create a new function.

I'm gonna call it mapForEach.

It takes an array and it takes a function.

Remember I'm using first class functions so I can pass a function object.

Map simply means what we just did here.

I'm going to take one array, do something to it and get a new array out of it.

I create a very simple mapping function.

I'll do very similarly to what I did below.

I'll even borrow this for loop here.

I'll just change this to array, so I'm looping over whatever array is passed.

I'm going to push to the new array, but

here is where my functional programming comes in.

I'm going to call a function and pass in that array item.

And then, this is going to return the new array.

So do you see what I'm doing?

I'm saying, I'm going to create a new array.

Loop over the array you've given me.

And add to that new array for every item in the one that you gave me.

Your array item, which is processed by some function that you also give me.

I've just abstracted the concept of iterating or

looping over an array, creating a new array out of it, and

writing some function, whatever function you want to, against each item.

Take some action against each item, pass this array item to the function.

And this function should then return something that it does with

that array item.

And I'll add that to my new array.

If I do that, then I can take all of this code here

and instead, I can simply call mapForEach.

I'll pass that first array to it and

then I'll create a function using a function expression.

It needs to accept an item, because that's what's going to be passed to it, so

I'll just call it item.

And then it needs to return and then do something to that item.

Do you see what's happening here?

Let's output this, let's go ahead and run this, and I get the same results.

A doubled array.

But what I did was I took all of that code,

all of that noise, of the four loop and

creating the new array, and I segmented that off into its own function.

And then I gave it the work to do against each item in the array.

This is very powerful.

Think about his for a bit, look at it.

I called a function.

Gave it an array and told it what to do in each item in the array.

Then this function here is what's passed in.

And that is what's called,

what's invoked, as the function is looping across the array.

That means that I could do something entirely different.

Let's say I have a third array that I'm gonna fill up.

And I'll give it this initial 1, 2, 3 array.

But, I don't even have to do mathematical things with this.

I could simply say, tell me, give me an array that matches up to this original,

but instead tells me if an item is greater than two.

See that?

I'm using the exact same map for each call.

And I'm giving a different bit of work and

then returning a Boolean in this case, true or false.

So, when I output this, we get false, false, true.

1 is not greater than 2.

2 is not greater than 2.

3 is greater than 2.

So, I get false, false, true.

See that?

I was able then to reuse this map for

each to do entirely different work against the array simply by passing the function,

passing the work that I wanted to get done against it.

This is a classic example of functional programming.

Where I'm using first class functions to my advantage

to segment my code in even cleaner and tighter ways.

And this lets me build really clean and in some ways beautiful looking code.

That's very straightforward to understand.

So mess around with this.

Try creating your own functions that you pass to the mapForEach.

Or create some other function that accepts a function that does work.

Let's look at another example.

Let's say, let me spread this out just a little bit.

Let's say that I'm gonna use my mapForEach to check

if something is past a limit, just like here.

But what if I want to make this two a variable that I pass in,

so that I can make this reusable?

Well, I can do the creation of a new function.

And maybe I'll pass my limiter,

what it is that I wanna say that it must be greater than.

Or less than and it will accept the item as

well because it's gonna do work against each item in the array.

And I'll return item > limiter.

See that?

So it's past whatever limit, I passed to it.

I'm just using a variable instead of directly hard coding a number right there.

I'm saying check and see if this item is past a certain limit.

All right, so how can I use this?

I have a bit of a problem.

This function accepts two parameters, and the map for

each wants a function that accepts just one.

So how can I take a function and call it, or

use it in a way that I've preset this parameter.

So that this function call up here

where it passes the item in my past in array to the function.

So that that get's passed to item and I would preset this.

Do you remember?

So, I can use bind.

I could say, I'll create another array, mapForEach, pass on that initial array.

checkPastLimit, but I'll bind.

The this keyword I don't need to worry about.

So I'll just pass the whatever this keyword is here, and I'll set 1.

Remember that if I put parameters on the bind,

it will default that parameter or preset that parameter to that value.

For every subsequent function call.

So I've just created a copy of this function on the fly,

with 1 as the limiter.

So now I can just console.log the resulting array.

So this should return false or

true depending on if each item in the array is greater than 1.

There it is, 1 is not greater than 1,

2 is greater than 1, 3 is greater than 1.

Do you see that?

That's my resulting array.

Let's track what happened again.

I created a function using a function expression that accepted some limiter

that I'm checking against to see if my individual array items are higher than it.

Accepts an item because we need to do work on each individual item.

And it gives me back a Boolean.

I then call mapForEach, and I pass the array.

That's the array that it loops over.

And I pass a function.

But I make a copy of it using bind.

I just put this in there because it doesn't really matter.

I'm not using a this keyword inside the function, and

then I set this first parameter to a 1.

So that when this mapForEach calls function and

passes that array item, that array item will get passed into here.

Cuz this is already a 1, the limiter is already a 1.

So it will say, all right, is this array item greater than one?

It give me back true or false.

It mapped one, two, three.

To false, true, true.

I could change this to a two.

It becomes false, false, true.

2 is not greater than 2, so that becomes false.

Make sense?

And that's all in one line of code.

But you might say well, it's kind of annoying to call bind all the time.

It would be nice just to pass in my limiter as the only parameter.

Can you think of a way to do that?

Can we create a function where I only pass in the limiter

and it gives me back a function like this?

Give that a try, pause the video.

Try to figure out a way to wrap up this

into a function that just takes the limiter.

So that all I have to do is just call it and pass whatever my limiting value is,

my top value, my value that I want to be right there.

Pause the video and try that for yourself.

See if you can come up with a function that will be even easier to use so

that I don't have to call .bind manually all the time.

All right, ready?

I'm gonna create, I'll call it checkPastLimitSimplified.

And it's gonna just take the limiter.

And since it's going to just take the limiter,

I need to create a function that I created up here.

So it's going to return a function object.

So I have a function that returns a function, but

I need it to have its Initial value.

It's first parameter preset.

All right.

Let's take a look at this again.

I have a function that takes the limiter.

It itself returns the function that I'll actually use, limiter, item.

I use .bind to preset the limiter from what I was passed here.

So when I run checkPastLimitSimplified, it will execute,

and it will just give me back a function that had the bind called on it.

Just like this here, essentially.

Now, don't get confused by this limiter and this limiter here.

This isn't getting passed to this.

This function isn't being executed.

It's simply creating the function object.

I create it with a function expression.

Then copy that object that was created with bind with this limiter

perimeter preset to whatever the value is I passed into that outer function.

So I'm creating an object.

That's all I'm doing, I'm creating an object.

I'm using .bind to create an object that has its first parameter preset.

So let's use this, I'll create yet another array.

MapForEach, pass that first array that has one, two, three,

and I'll use checkPastLimitSimplified and I'll simply set my limiter.

Let's log this.

False, false, true.

One is not greater than two.

Two is not greater than two.

Three is greater than two.

Let's change it, I'll just set a one.

One is not greater than one, two is greater than one,

three is greater than one.

Do you see that? Do you see what's happening?

I called this function, which returned a function object with its first

parameter preset to this number, and that returned

function object is what gets passed to the map for each.

And then it gets called, and

I get my new array back in one very clean, very simple line of code that I can reuse.

I hope at this point, you're taking a good look at this code and

trying this for yourself, that you come to begin to appreciate the power and

expressiveness of functional programming.

Instead of thinking purely in just separating your code into functions,

you can start to think about how can I give my functions, functions, or

return functions from my functions, in order to even

greater simplify the code that I'm writing over and over again.

At first, it may feel like it's stretching your brain a little bit,

to have all these functions flying around.

But once you get used to it, it's very natural feeling to split

things into functions, to pass them around to each other,

because you're just splitting up the work in even finer

more minute granular details than you might in other programming languages.

And this gives you an opportunity to really do

some extraordinarily clean things.

One other note about functional programming, your functions,

especially the tiny ones, as you're moving and passing little functions around

that do work, should do their best not mutate data.

Mutate remember, means change.

You can really find yourself in odd circumstances when you're

actually changing data in these little tiny functions that you start to pass

around as you're breaking things down in functional programming.

So it's always better to mutate data, that is, change it

as high up in that chain as possible of functions, or to not change it at all.

Instead, return something new, like we're doing here with

new arrays as opposed to changing that core array that I passed in.

That's just a side note about functional programming.

Functional programming in itself could be an entire course.

But I wanted to introduce you to this idea in JavaScript

because I think this first class functions and

functional programming in JavaScript Is really what takes JavaScript to the next

level, and will take you as a JavaScript programmer to the next level.

Instead of simply using JavaScript the way that you use maybe other programming

languages, like PHP or Java or C# or

whatever, you can use the full power of the language that's available to you.

It's not available in those other languages.

All right, let's take a moment to talk about one of the most well used and

well known examples of functional programming in JavaScript.

**/



























