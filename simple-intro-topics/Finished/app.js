String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(13));

Number.prototype.isPositive = function() {
    return this > 0;   
}
document.write("Hello World!")

/*

And let's show some of the built-in function constructors that exist.

Meaning that there are just some functions and function prototypes that exist that

many of which you might have used already, perhaps even without realizing it.

For example I could say that some value is a new number.

And then give it a number to initiate with.

Or even give it a string to convert it to a number.

Something like that.

What is this?

Well, it's using the new operator, so this is a function, a function constructor.

And JavaScript even uses the convention of capitalizing the first letter of the word.

So I've created a new number.

If I hit enter and then output what A is, notice that A is not a number,

it's not a primitive, it's an object.

Because function constructors create what?

Objects.

Then added a primitive value inside of it, three, but

because it's an object there's a prototype.

So there's a number dot prototype

which is what all number objects will have access to.

And it has some built in methods, like toPrecision or toFixed for

doing math and conversion there on numbers.

Interesting right?

So that means I can do a.toFixed, for example.

See that?

All right, let's try a different one.

How about A equals new String.

And I'll start it off with John.

This is also a function constructor.

And A dot has access to

a whole bunch of methods of things that I could do with a string.

Because those methods don't actually live on A, but

live on string.prototype, which is the function constructor's prototype property,

where this variable's prototype is pointing, right?

So, that's actually where these interesting things like index of,

for example.

And I give it a character, and it tells me whether or not it's there.

Or I give it a value and it tells me whether or not it's there.

Now, I did this on string.prototype so I didn't find anything.

But if I do it on A, then the this changes.

And I can find O at position one.

Zero, one.

See that?

So the string isn't itself though.

If I hit enter here, notice that string is not a string, it's not a primitive.

It's an object.

It has all of these properties and methods on it and then inside of it,

what's called boxed inside of it, is the primitive value itself.

So these built in function constructors

look like you're creating primitives, but you're not.

You're actually creating objects that contain primitives and

give them extra abilities.

In some cases, JavaScript understands that you intend to look at an object and

not a primitive.

So I could do John dot length.

What happened is that the primitive is just a primitive,

it doesn't have properties or methods.

But the JavaScript engine boxed it inside of a string object which has

all these properties and methods, and then gave me access to it kinda automatically.

Basically the same as going new String John, and

then doing the dot length on that.

Make sense?

So there are cases where the JavaScript engine wraps up the primitive in

its object for you, just so you can use properties and methods you might want to.

But anytime you see new, maybe a new data

takes a string inside the function constructor.

This is just a function, and I called new and so I get an object back, and

what is A?

Well A is an object because when I hit dot,

I have a whole bunch of features that the JavaScript engine provided on where?

Where are all of these properties and methods actually living?

They're not actually living on A.

Where are they actually living?

Well this is the name of the function, right?

So they're living on date dot prototype.

And that's where actually all those methods and properties live on.

Make sense?

So when I'm using these function constructors,

you have to remember that you're actually creating objects.

And it turns out that this can be somewhat useful,

especially if you're building extra features in libraries or

frameworks to tack on to these primitive values.

Or really any of the pre-existing values like a raise, or objects, or

functions inside JavaScript.

So if I go to my app.js file, let's say I want to

add a feature to all strings in JavaScript.

Well we saw that JavaScript will box those strings, that it'll,

it'll convert the primitive to the string object which has a bunch of properties and

methods on it for you.

And that's pointing to a prototype where those properties and methods actually

live, and there's nothing preventing me in JavaScript from adding onto them.

So I can go string.prototype, which is where all string objects will point at for

their prototype, where they'll look at when going down the prototype chain.

And let's say I wanted to add a feature like is length greater than and

I'll pass a limit.

And I'll return this, now what is this going to be pointing at?

Well, if I have a string object, it'll be pointing at that string object because

the JavaScript engine takes care of that when going down the prototype chain.

Dot length is greater than limit, so it'll give me back true or false.

So, I could say, let's say .console.log.

John dot.

Is length greater than.

And let's say, three.

So what's going to happen?

True.

What just happened?

Well, the primitive string was automatically converted to a string

object generated by the string prototype function.

This is a function.

It returns an object because I put a dot after and

I added a method to the prototype, so

all strings instantly have access to this method.

All strings everywhere.

That's the power of prototypal inheritance.

I've just enhanced the JavaScript programming language just like that.

And many libraries and frameworks use this technique to add features.

To add concepts and ideas and utilities.

Now you have to know what you're doing, you have to be careful,

you don't wanna overwrite an existing or preexisting property or method.

But you can very powerfully affect the language by understanding function

constructors, the prototype property of a function constructor, and

editing the prototype property of built in function constructors.

Make sense?

Now this worked because this string was converted to an object automatically.

So can I do that with numbers?

Let's say I want to take number, which is the built in function constructor.

It's just a function intended to be used with the new keyword and

that'll affect it's prototype, so

hopefully affecting all objects created with the number constructor.

And let's call this is positive and this'll be a function that just says,

"Is this greater than zero?" How about that?

So can I use that in the same way?

Refresh, I'll do three dot is positive.

Oh, error.

Why? Well,

because JavaScript, while it's nice enough to convert string for

me automatically won't convert a number to an object automatically.

However, if I did something like A equals new number, so I use that function

constructor, meaning A's prototype will point at number dot prototype.

Then I could do A dot is positive.

So this whole thing of built in function constructors.

It's neat and you can add some abilities.

Especially to things like arrays or strings pretty easily.

But it gets a little dicey as you try to deal with primitives versus

things that were created with the function constructors that look like primitives.

This looks like it's a number.

It's not a number.

It's an object that wraps or boxes up a number and adds a bunch of features.

So it can get confusing.

We're going to talk in the next lesson about why this is dangerous for a moment.

And why in general you shouldn't use function constructors,

the built in function constructors, for these primitive types.

Unless you have to.

Even though it is useful to add features in some cases.

All right, let's move on.



Dangerous


All right, so it's time for a dangerous aside.

We've already talked about the built-in function constructors and

how they can be kind of neat, but they're also dangerous.

Here's a simple example to show why built-in function constructors for

primitive types, especially like boolean, number, string, are dangerous.

Let's say I have a variable a which is 3 and

a variable b which is new Number 3.

If I say a == b, that's true.

Why?

Because this coerces types.

The ==, that operator, looks at a and sees a primitive,

looks at b and sees an object, and tries to convert them to the same type.

And once it does, they're equal.

If I use the recommended triple equals, a and b are not equal.

Why?

Because a is a primitive and b is an Object,

created with this function constructor.

And the === function, that operator,

if it sees that the two things are not equal it immediately returns false.

Doesn't even try, doesn't even bother.

It just says, nope, they're not the same type, there's no way they can be equal.

Because in reality, these two things aren't equal.

So do you see the danger there?

By using built-in function constructors for

creating primitives, you aren't really creating primitives.

And strange things can happen during comparison with operators and coercion.

It's better, in general, to not use the built-in function constructors.

Use literals.

Use the actual primitive values.

And in cases where you absolutely have to use them,

understand what you're doing to yourself.

Understand that any kind of comparison needs to be against the same type.

One other thing I want to note,

what if you're dealing with dates that we already saw?

Or we use the date built-in function constructor.

There's an absolutely terrific library called Moment.js.

You can go to moment.js.com.

And it wraps up a whole lot of functionality for

dealing with, formatting and doing math on dates.

If you're going to do a lot of date work, I recommend you use this library,

instead of a lot of work with built-in JavaScript date constructor.

This helps out with some problems within that built-in constructor.

So, just know about Moment.js.

Momentjs.com, that's very useful.

And again, we just want to be certain we have this clear.

It's dangerous to use function constructors,

the built-in ones, for primitives.

I can try to use them for conversion sometimes,

I might say c = Number and then pass in a string 3.

This time I'm just using it as a regular old function, not as the new keyword.

And when I do that c is the converted value.

So that can be useful under certain circumstances.

But understand again the difference there between using the new keyword and not.

You're calling the function.

In this you're creating an object, calling the function and getting an object back.

So that's just something to note about these things.

Some new JavaScript developers use this all over the place, use these built-in

function constructors, without realizing they're creating objects, not primitives.

So be aware, and let's move on.


*/