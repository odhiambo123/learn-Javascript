// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


/**


What we've seen up to now is one way to create objects in JavaScript

using function constructors.

But we've already seen that function constructors were designed to mimic other

languages that don't implement prototypical inheritance, and

so they're a little awkward.

Other languages implement something called classes, where a class defines what

an object should look like and then you use the new keyword to create the object.

And that's what function constructors are trying to mimic.

On the other hand, many consider it better to simply focus

on the fact that JavaScript does use prototypal inheritance, and

not what's called classical inheritance, and accept it, embrace it.

And so yet another way to create objects that doesn't try to mimic other

programming languages, and it's something that newer browsers all have built in.

It's called Object.create.

So let's look at it and think about pure prototypal inheritance.

I'm gonna go ahead and create a new object using object literal syntax.

And I'll give it a first name of Default.

A last name I'll just call it Default.

And let's do this time a greet method.

And it's going to return Hi + this.firstname.

Got that?

By the way, I have to use this, the this keywords when I'm referencing the object.

If I didn't use the this keyword it would look for

it in this function context, when executed, this execution context.

Not find it, and go out to the global execution context.

And it wouldn't find first name there, because it's inside the person object.

And objects don't create new execution context, just to be clear.

So if you accidentally forget the this variable in a method on an object,

then it's probably because you forgot that this variable that you're getting errors.

All right, so, moving on, I have this object.

Now I'm going to use something built in to more modern browsers

to create a new object.

Again, this is all about building objects.

And it's all building the same things.

I'm not changing how things work, but how I can construct them.

So I want to build an object, a new one, and set its prototype.

So I'm gonna create john, and I'm going to go, object.

That's that base object concept in JavaScript,

.create and I pass it a person.

I'm gonna pass it the object I want to create from.

Now what does this create for me when I do this?

Well let's console.log(john).

This is built in to the JavaScript engine.

So I have an object.

But notice my object is completely empty.

There's nothing there.

And its prototype is the person object,

the first name, the greet method and last name.

See that?

So Object.create creates an empty object with its prototype

pointing at whatever you passed into Object.create.

So if I go john.greet I just get default.

And the pattern is that you override whatever you want to by simply

adding the properties and methods yourself to the created object.

So if I want to hide those default values I simply create the same

name of the property or method on my new object.

And since the JavaScript engine travels down the prototype chain looking for

a property or method until it finds it, it'll simply find it on this object and

not move down the chain.

So if I refresh this, now I have my first name and

last name on my john object, and I still have my prototype,

which means I can call john.greet() and it works with my updated values.

And that's it.

That's pure prototypal inheritance.

There is no other concept that tries to define how an object is structured.

You simply make objects and

then create new objects from them pointing to other objects as their prototype.

If you want to define a new object,

you create a new object that becomes the basis for all others.

And then you simply override, hide properties and

methods on those created objects by setting the values of those properties and

methods on the new objects themselves.

Make sense?

So I can keep my methods on that base object.

I can add new methods and properties to my base object and

all my created objects using Object.create will suddenly get them.

This is pure prototypal inheritance and it drives some people crazy cuz it's so

simple.

But when you start to use it in real world scenarios, you'll see it's just lovely.

You don't have a lot of confusion, a lot of verbosity.

It's very straightforward, and it's very powerful because you can mutate,

you can change the prototype along the way.

Make sense?

All right, now we said that this was...

A newer thing that modern browsers, that's JavaScript engines and

more newer browsers are implementing.

But what if you are involved in a project that requires you to support users that

are on older browsers, or maybe an older environment where the JavaScript

engine doesn't support Object.create, it doesn't have it.

Well you can use what's called polyfill.

And Big Word Alert, polyfill, it sounds complicated.

Not really.

A polyfill is code that adds a feature which the engine may lack.

So whatever code you're dealing with,

because there's usually different versions of engines.

For example, there's older and newer browsers, Internet browsers, so

they have older and newer JavaScript engines.

We can have some code that checks to see if the engine has a feature, and

if it doesn't we write some code that

does the same thing that that new feature would do in the newer browsers.

So I'm filling in the gaps where an older engine might not have

some features that the newer features do.

So let's look at Object.create.

What if I'd like to use Object.create in my project but

I'm forced to support some older browsers that don't have Object.create built in.

Their JavaScript engines don't have this built in.

Am I done?

Do I have to use function constructors?

No. In a lot of cases for

a lot of features there are things called these polyfills.

I'm gonna drop on in here and you can see how it uses some of the things we've

learned to fill in the gaps for any engines that don't have the feature.

So I'm checking to see if Object.create exists.

Why? Because if it doesn't exist what will this

value be?

Undefined, and

then I use the not operator, that's what's called a unary operator.

Meaning that it only takes one parameter and then returns the reverse.

Other operators like the greater than operator are called

binary operators because they take two parameters, one on each side.

There is one other special type of

operator called a ternary operator that takes three parameters.

But anyway I'm digressing here a bit.

The idea that this operator will take Object.create and if the browser

already has this, this will be a function, and if it doesn't it will be undefined.

Either case it will be coerced to a Boolean.

And so this whole if statement will be skipped, if this exists in the browser.

If the JavaScript engine already has this, but if it doesn't,

if this is undefined, it will run this statement, which will add this object and

function to the global object.

All right, so we have this idea, right?

So the create will get added to that base object, which is on the global object.

So what is this polyfill doing if I'm using an older

JavaScript engine that doesn't have Object.create?

Well it takes an object, just makes sure that there's one argument.

But this is the important part, it creates an empty function.

And then sets the prototype, that variable of prototype that is used

for function constructors, and sets it equal to the object that you passed in.

So you can completely overwrite this prototype,

set it to whatever object you want.

And any objects created using the function constructor will get this

as its proto property.

All right, so this returns a new, it uses the new keyword.

And then a new empty function here, which is just a constructor function.

So, if we think about what this is doing.

The new creates an empty object, it runs this function, which is empty and

points the prototype of that new empty object to whatever you passed in.

And that's exactly what Object.create is supposed to do.

You give it an object, and that becomes the prototype of a new empty object.

So this just fills in the same functionality that we would

expect to see in the browser.

So this is a polyfill.

I'll just put it there.

Put a comment.

Polyfill.

And if your browser has this, has Object.create, then,

don't need to worry about it, it's there it'll just get skipped and we can use it.

All right so let's go back to thinking about the usage of Object.create.

I create an object that forms the basis of my constructing all other objects.

This is an object unto itself.

Then I use Object.create just to create other versions of it, and

then can overwrite it or hide its properties.

So, this is pure prototypal inheritance.

It's not trying to squeeze in any other concepts from other programming languages.

It's just, create an object, and

then use that object as the prototype for other objects.

Very simple, very straightforward.

And yet, if you think, oh, this is too simple, stop and realize the power

of being able to mutate, to change the prototype on the fly.

You can add features depending on what features you need for

example, at any point in the application.

It opens up a freer approach to constructing objects.

And you're not unnecessarily creating complex layers and interactions.

So, try it out.

Try it for yourself.

Try Object.create.

Try thinking purely prototypal and see how it works for you.

Let's move on.


SYNTACTIC SUGAR



The next version of JavaScript, EcmaScript 2015, or EcmaScript 6 or

ES6, whatever you want to call it, has a new concept coming.

And yet, it's just another way to create objects, and to set the prototype.

Let's look at classes.

Classes in other programming languages are extraordinarily popular.

They're a way of defining an object, defining what its methods and

properties should be.

JavaScript doesn't have classes.

However, in the next version it will, but in a different way.

So, what will a class look like?

A JavaScript class defines an object.

Just like we have done all along.

We have an constructor that acts somewhat like the constructor

functions that we've seen in that you can preset its values.

So when I create a new person in this instance, for

example, and I use the new key word to do this.

I can pass first name and last name, and then this key word will be set

to that new instant that's being created, that new object that's being created.

I can also have methods like greet sitting inside the class.

And it's just available.

But here's the problem, people coming from other programming languages,

when they see this class they think oh, great.

This is just like what I'm use to.

The difference is that in other programming languages,

class is not an object, it's just a definition, it's like a template.

It tells you what objects should look like.

But you don't actually get an object until you use that new key word.

But JavaScript even though it's adding the class key word,

still doesn't have classes in that sense.

Because this is an object in JavaScript.

This class person actually is an object that's created.

And then you're creating new objects from that object, and that's okay.

My fear though is that rather than appreciating the differences and

the beauty of prototypal inheritance, those who are coming from other

programming languages will simply see the class key word and immediately begin to

design object structures the way they do in C# or Java or C++.

I think that's a huge mistake.

And I also am weary about still having to use the new key word.

It's still an attempt to appease those coming form other languages.

And I personally aren't crazy about it.

However, it's one of those things.

It's in the language.

It's definitely better than function constructors because

at least the language will be able to say this is a class.

You have to use the new keyword so

the engine can stop you from doing something really silly.

My hope is that if you are learning JavaScript, if you're using JavaScript,

you'll stop just like this class is trying to help you do, and

understand what's happening under the hood and appreciate prototypal inheritance.

The simplicity of it as opposed to trying to mimic some other programming language.

Oh, by the way, how do you set the prototype, then?

Well, that's another new key word.

Let's say that I was creating an informal person, or a person is my prototype,

I simply use the key word extends.

And that sets the prototype for any of my objects created with this

class, essentially that __proto__ property at least in Chrome.

And in my constructor, I can call the key word super.

Which simply we'll call the constructor of the object that is my prototype.

So I can pass my initial values down the chain.

And then I can override or hide, just like I did.

With object.create.

Make sense?

This isn't completely ready yet.

The point of the recording of this particular course.

But we will talk in a bit about how you can use these features right now.

Even if your users are using older browsers,

or that these concepts aren't even ready at all in the current browsers.

But, for now, this is what's coming for creating objects,

creating methods and properties on objects, and setting their prototype.

It's just another syntactical way, another way to type this.

Another approach but under the hood, it's all still working the same.

In fact, if you read on the Internet about classes, you'll often see for

classes in JavaScript a phrase that it's just syntactic sugar.

Well Big Word Alert, syntactic

sugar is just when you have a different way to type something into your code.

It doesn't change how it actually works under the hood.

We've already seen that function constructors,

object.create, are doing the same thing ultimately.

Essentially class in JavaScript is doing just that.

It's not changing anything about how the JavaScript engine does things,

about how objects and prototypes work under the hood.

It's just syntactic sugar.

Just giving you a different way to type it in your code.

But when that code is executed,

what's generated by the JavaScript engine, is still the same old thing.

It's still prototypal inheritance.





*/