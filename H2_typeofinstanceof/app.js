//This is typeof, instanceof, and figuring out what something is.
// typeof keyword and the instanceof keyword.


var a = 3; //So, for example, I have a variable set to a numeric primitive,
//typeof tells us what you would expect.What type of thing is this.

console.log(typeof a); //a number primitive, and the first thing that 
//I see printed is the word number. LOWERCASE n as opposed to the function constructor with a 
//capital N

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);


/**

We've seen how dynamic typing in JavaScript lets

us do some interesting things and can also be a little dangerous.

But what if you have a variable and

you want to know what type it is, programmatically?

Well, JavaScript does come with

some utilities to help us with that, but they aren't perfect.

This is typeof, instanceof, and figuring out what something is.

I've gone ahead and pre-filled our app.js file with some variables of different

types, and I'm using the typeof keyword and the instanceof keyword.

For starters the typeof tells us what you would expect.

What type of thing is this.

So, for example, I have a variable set to a numeric primitive,

a number primitive, and the first thing that I see printed is the word number.

Notice that's lower case n.

I'm not using the function constructor Number with a capital N,

which we generally want to avoid.

So I get that primitive type number, with a lowercase n.

So I can check and see if my variable is a number, this typeof returns a string.

It's an operator, which means it's a function that takes a parameter and

it returns a string.

So the string that it returns is number, in this case.

Here I made a string, so typeof space and

then the variable I'm checking returns the string, string.

I have an empty object, this could have properties and methods, it doesn't matter.

When I look at typeof and pass this object to it, I get the word, the string, object.

Here's one that's a little weird.

Arrays are objects.

And so when I pass to it an array, an empty array,

typeof, it gives me back also object.

That's not so useful.

There's a couple of ways around this.

One of them is to use both the prototype concept and

the concept of .call, which you've already seen.

When I do the typeof on the array, I get the string, object.

If I was to try, let's say,

console.log(d.toString()); maybe that would help me.

What i get is just an empty string, because

it actually tries to take the contents of the array and convert it to a string.

So that's not helpful either.

However, on that base object, called object, that I'm looking at,

there is a two string property on its prototype, on this

function constructor's prototype, which is the base object toString.

And then instead of acting on this Object function constructor of the prototype,

I'm doing .call, which as you know means

invoke this function but tell it what this variable should point to.

So since toString uses the this variable to output its value,

I'm saying take my array and

call this toString on it deeper down in the prototype chain.

And that little trick gets me this string.

And this is a string, it's object and

then the word array with some brackets around it.

So at least I can tell that this is an array this way.

Then I have a Person function constructor.

I give it a capital P and I'm not returning anything.

And so I set a variable equal to new Person.

And let's see, the typeof e is also an object.

That's expected.

This is just an object.

This other keyword called instanceof, though, what it does,

it tells me if any object is down the prototype chain.

If anywhere down that whole prototype chain of going proto, to proto,

to proto, I find this type of object.

If I do then this first parameter is an instance of that one.

So e should return true because it's

an instance of person because we can find the person down the prototype chain.

And it does come back true.

Lastl,y we have typeof undefined and typeof null.

Well, undefined isn't anything, so its type is undefined.

So that kind of makes sense.

One last thing that's been a bug in JavaScript since forever,

a long time, so much so that there are libraries and

a lot of code that rely on it being so, so they've never fixed it.

If you try to do typeof and something is null, you'll end up with an object.

I know that's kind of terrible, but it's a bug and

it's been around too long to fix in some ways.

So typeof, which is an operator that accepts a parameter, but it's essentially

a function returning a string, will tell you under most cases what something is.

An instanceof, if you dealing with object chains,

will tell you what something has in its prototype chain.

And these can be useful under certain circumstances when you need to tell what

something is that's being passed in if you don't know ahead of time or

it might be multiple types.

Oh, and one more thing.

Let's set a variable z equal to just an empty function.

What do you think I'll get when i do console.log(typeof z)?

Lets refresh.

I get the string function.

Remember, I can check the type of a variable to see if it's a function because

functions in JavaScript are objects.

So since it's a first class function, it's really an object.

I can also see if a variable is a function.

Pretty useful.

All right, so that's typeof and instanceof.

Try these out for yourself.

See what kind of results you get.

*/
