var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));



/*

It's time to talk about three functions that have

a lot of people that are newer to JavaScript

scratching their heads Call Apply and Bind.

These three functions have to do with something we've already talked about.

In our execution context we have our Variable Environment,

Outer Environment reference and

we have this thing, this variable that's set up for us called 'this'.

We've already seen that the this key word can point to the global object in some

cases, and in other cases it can point to the object that

contains the function, if the function is a method attached to an object.

Wouldn't it be nice to be able to control what the this variable ends up being?

When the execution context is created.

Well, Java script has a way to do just that.

And that's where call, apply and bind come in.

We could have talked about this before,

when we talked about objects, functions, and this variable.

But to properly and fully understand call, apply and bind.

Especially when looking at it syntactically.

We need it to have a complete understanding of first class functions.

So, we already know a function is a special kind of object, it has a hidden

optional name property which can be anonymous then if you don't have a name.

We have a code property that contains the code and

that code property is invokable so we can run the code.

All functions in JavaScript also get access

to some special functions, some special methods, on their own.

Remember, a function is just an object, so it can have properties and methods.

So, all functions have access to a call method,

an apply method, and a bind method.

And all three of these have to do with the this

variable and the arguments that you pass to the function as well.

All right.

Let's take a look.

Let's suppose I have an object,

a person object I'm gonna use object literal syntax.

Give a first name 'John' as the property.

A last name 'Doe' as property.

Let's do a method called getFullName.

Inside my object literal I use a function expression.

Set up this function.

Let's say I use this.firstname,

this.lastname, and then I'll return fullname.

So I have this object with these two properties and this method.

The method uses the this keyword.

And remember since this is a method on an object an this function is executed

this key word will point to this whole object the person object.

The object that contains the method.

All right so, what about call, apply and bind?

Well, let's imagine that I have some logName

function that exists outside of this object.

Maybe it takes a couple of parameters about language and some other things.

I'm just going to go ahead and console.log.

We're gonna say logged and

then we're gonna say this.getFullName(); all right.

So, for starters, we know that this will fail, right here.

Why?

Because the this keyword here at the this level

is going to be pointing to the global object I'm not a method

this function isn't a method of the person objects so

when I go to run this, actually let me execute it, sorry.

Let me go now run this.

It says undefined is not a function.

The this is the global object and there is no getFullName.

So that's undefined and then I tried to invoke undefined.

Then it gave me an error.

Well, that makes sense, but

wouldn't it be nice if I could control what the this keyword points to?

So let's make a new function called logPersonName.

And I'll use the logName function.

And all functions in JavaScript get access to these three methods.

The first we'll use is .bind.

Notice I'm not invoking the function and

saying .bind because, the function returns a value.

I'm looking to actually use the function as an object and

call a method of that object.

So just logName.bind, because this is a function object, .bind.

All function objects get this.

And then, I can pass to it whatever object I want

to be the this variable when the function runs.

The bind function, the bind method returns a new function.

So, it actually makes a copy of this logName function.

And sets up this new function object, this new copy.

So that whenever it's run.

When its execution context is created.

The JavaScript engine sees that this was created with this bind,

which sets up some hidden things in the background, so that.

When the JavaScript engine decides what is the this variable,

it says well it must be that.

Right there, whatever was passed to the bind method.

So I'm affecting the JavaScript engine as far as what it decides when it

creates the execution context for this new copy of this function.

So If I call logPersonName instead of just logName,

I call this new copy of this function created with bind.

When it says this, this will be the person.

This person object.

So I can call the get dot get full name and it logs it.

See that?

I could even have done this here.

I could have created the function on the fly and said .bind(person) and

then if I call just logName() instead of error-ing,

this now points to a copy of this function that was created on the fly bound with

the this variable to whatever I want to this variable to be.

So this become essentially, right here, preson.getName.

Because I passed it in to the bind.

That works too.

So the .bind creates a copy of whatever function you're calling it on.

And then whatever methods you pass to it,

whatever object you pass to this method, the person object pass to bind,

the person object is what the this variable points to by reference.

Make sense?

So let's say that I want to also log.

Let's do it below here, log my Arguments.

Just so we see this as well, everything that's happening.

And then, first, I'm going to call this a few times.

I'll go ahead and set up just a line or something so

you can see every time this is called the difference.

All right so, I called this.

Notice I have two undefined arguments.

My language 1 and language 2 are undefined.

But I can pass an argument.

Remember this is a copy of the function so

it still takes the same arguments, only this variable will be person.

So that still works, and I see English and undefined.

I'll even just a put a space in here just so we can see it clearly.

How about that, there.

This is what bind does, creates a copy, and

I can tell it what the this variable is, at least in part.

Let's move on first to call and apply before we show anymore.

If I do logName.call, this calls the function.

And invokes it.

I could've also called the function like that, with parenthesis.

Move down a bit.

But instead I did .call instead of parenthesis,

because .call also, lets me decide what the this variable will be.

The first thing I pass to call is what the this keyword should point to.

It works the same as these parentheses, but lets me control what this means.

And I can also pass it parameters.

Unlike bind, which creates a copy of the function, call actually executes it.

And then just decides what the this variable should be and

the rest is just the parameters that I would normally pass to the function.

See that?

So if I call this again, there's my .call, it executed the function.

This bind did not execute the function, it created a copy.

With the this variable setup.

This one actually executed it.

And I just passed the parameters as well.

LogName.apply, all functions can get .apply.

This does the exact same thing.

Only one difference.

If I tried to pass variables like that, I'd get an error.

Arguments list has the wrong type.

Because the apply method wants an array

of parameters, rather than just the normal list.

And that's the only difference between call and apply.

And that works too.

An array can be more useful especially under mathematical circumstances.

Let's say, I was adding a bunch of numbers, and

it could be any number of variables, or other things like that.

So, I just have two options depending on how I'm coding,

what my pattern is for how I'm using this function.

Make sense?

And again, I could do this on the fly, I could take this function,

trick the syntax parser into realizing it's not a normal function statement,

it's a function expression.

But rather than immediately invoking it with these parentheses,

I'll immediately invoke it using, let's say, .apply or .call.

And I'll say person and give it an array of whatever I'm passing to it.

See that? It looks a little odd,

but I'm just creating a function on the fly.

And then invoking it using .apply because all function objects get access to

this method, telling it what this is and passing some arguments.

So that should work again, and it does.

Yet another list there.

Just so you can see the difference, I'll sort these two.

There it is.

So that's interesting.

And I know what you're probably thinking.

When would I ever actually use this in real life?

Well, let's talk about two instances.

So I've scrolled down a bit in my code,

and the first thing I'm going to show is something called function borrowing.

Let's say I have a second person object with similar property names,

but different data, let's say Jane, lastname Doe.

This is very similar to my first person object,

only the second one doesn't have a getFullName method.

So I'm going to do something called function borrowing by using call or apply.

I'll take that first person object I created which does have the getFullName

method and since it's a function, it has access to .call and .apply.

I'll just use .apply.

So it's going to execute, invoke this function.

I am going to tell it, but

the this keyword should point to my person2 object.

See that?

So I am invoking this method here on this object.

But since it uses the this keyword to access its other properties,

I'm setting the this keyword to my person2 object.

So if I console.log the results of this, Jane Doe.

There it is.

See that?

So what I've done is I've borrowed a function.

This method here, this function on this person object, I wanted to use it for

my person2 object so I borrowed it using the apply.

I could have done the same thing with call.

Make sense?

So you can grab methods from other objects and use them as long as you have

similar property names so that the function works.

Let's look at a second example, called function currying.

This in particular has to do with the bind, the .bind.

Because that's creating a copy of the function, and it actually does something

rather interesting if you pass parameters to the bind.

With call and apply, passing parameters just passes the parameters.

But with bind, you're creating a new copy of the function.

So what happens if you pass parameters to it?

Well, I'll say I'm going to create a new function called multiply.

That's just gonna return a times b.

I'll pass it two things, two numbers, and it will multiply them.

Then I'm gonna create a new function.

A copy of the multiply, using .bind.

I don't care about what the this keyword is in this case,

I'm not using the this keyword.

But I am going to give it A parameter value.

Now remember, bind is not calling, it's not executing the function.

So what does this do?

Since I'm not executing it, what does giving it parameters do?

Giving it parameters sets the permanent values

of these parameters when the copy is made.

So by setting two, what I'm saying is the first parameter,

cuz the first thing I put is the value of this keyword, and then my parameters.

The first parameter will always be a two in this copy of the function.

The variable A will always be a two.

This is essentially equivalent to taking this function and

then setting up what this keyword will be,

and then instead of having a I just permanently set a to 2.

See that?

That's what this is doing right here.

So, the bind is permanently setting this right there and

I can call my new function,

my new copy and if I pass to it,let's say a three or a four.

This will end up as the second parameter, the B.

So, if I console.that log inside the console.log.

So, what I've done is said, give me a copy of this function or

that this variable is set up, and

then also decided to set a permanent value for this first parameter.

When you call this new copy I've essentially done away with this first

parameter, and so whatever you pass will be that second parameter.

And so, if I run this eight,

four, which is B, times two, which is the permanent A.

If I had passed both parameters to bind

I'm essentially telling it this is the value of a and

b always, and this 4 just becomes an extra parameter passed to the function.

So even if I pass 4, it's going to be 2 and 2, so I'll always see result of 4.

If I made a 5 it's still 2 and 2, 2 times 2 is 4.

If I pass no parameters then I have A and B open so

I could do 5 and 2 and that would be 10, but

in this case I've intentionally made a permanent

Version, a permanent copy with certain parameters by default.

I've taken my multiply, and I've made a multiply by two and

I can take this multiply function and make another,

multipleByThree, set a to 3 and then call that and I get 8 and 12.

See that?

I took a function and

created a new function from it with some default parameters.

That's called currying.

Big word alert.

Function currying: creating a copy of a function but with some preset parameters.

Their cert turns out to be really useful in mathematical situations,

so if you're building a library that has to do a lot of mathematical calculations,

you can have some fundamental functions that you can then build on with some other

default parameters.

A really good useful usage for bind.

So that's it, that's call, apply, and bind.

Apply and call invoke the function and let you set up the this key word and

then pass the other parameters if you want in two different ways.

And bind creates a copy of the function,

let's you set up what the this key word should mean and

also let's you set default parameters, permanent preset parameters if you want.

So, these are all useful and you'll see them, don't be scared by them.

They're just methods on the function object that have to do with setting up for

this keyword and how and what happens when the function is invoked.

All right, let's move on.


**/