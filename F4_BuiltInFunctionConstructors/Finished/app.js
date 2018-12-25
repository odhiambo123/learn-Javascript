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



*/