function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());


/**



So we've seen that function constructors can be used to set up properties and

methods on new objects, but how do we set the prototype,

the other important part of creating objects in JavaScript?

Let's take a look.

So here's our code from the last lesson.

And the question now is, how do we set the prototype?

Well there's good news.

When you use a function constructor, it already set the prototype for you.

Let's go take a look.

I'll refresh this.

Notice that we have our output of our two objects.

But if I did john._proto_, which works here inside Chrome,

I'll see that it's some kind of special Person object that's empty.

It's an empty object, but where did it come from?

Well, any time you create a function object,

remember how we said that it has certain special properties?

Like the name and the code?

Well, there's another property that all functions get

that is actually completely visible to you and that you can and

should use when you're using a function as a function constructor.

So remember, our function is an object, and JavaScript functions are objects.

Some properties, we don't really think about that much, like name.

A function can be anonymous.

We've learned that a function has a special code property

that holds the code that gets executed when you invoke it.

It's invokable.

And all functions, every function,

every function in JavaScript you've ever written in your life, has a prototype

property that starts off its life as an empty object,

and unless you're using the function as a function constructor, it just hangs out.

It's never used.

But as soon as you use the new operator to invoke your function,

then it means something.

It sits there.

It lives only for when you're using a function as a function constructor.

For when you're using a function specifically to build

objects in this special way, the prototype property is used.

And it's a confusing name, because if I see something dot prototype, I think,

oh, I'm setting or accessing the prototype of this object, but no.

Remember we already saw that in some cases you can use underscore underscore

proto underscore underscore to get access to the prototype.

The prototype property on a function is not the prototype of the function.

It's the prototype of any objects created

if you're using the function as a function constructor.

All right, let's look at that.

All functions, every function you create in JavaScript,

gets this special property, .prototype.

There it is.

All right. So what is it?

It starts its life as an empty object, and it's always there.

And you can add on to it.

So let's say I add a getFullName property.

Actually a method in this case cuz it's a function.

And we've already done this.

Return this.firstname + this.lastname just as a simple example.

All right. So here's what's happening.

Remember we said the prototype chain is that every

object has this special property that points to another object

that is its prototype so it looks for properties and methods down that chain.

When you call the new keyword it creates an empty object,

and it sets the prototype of that empty object

to the prototype property of the function that you then call.

So, any objects you create using this function as a function constructor,

specifically using the new keyword and not returning a value,

letting JavaScript automatically return that value, means that the object

therefore created not only has whatever properties and

methods you attached to it inside the function, but it has a prototype,

which is .prototype property of that function.

That's where it really gets weird.

It's terribly named.

I'm gonna admit it.

This prototype property of all functions is where the prototype chain points for

any objects created using that function as a constructor.

So John points to person.prototype as its prototype,

as its __proto, and so does Jane.

So they'll both get access to this method that I just added because

this is their prototype.

Make sense?

So, if I run this, now that I've added getFullName,

you'll see that those persons added have the getFullName function.

I can go john.getFullName, and it works.

Just like we did before.

And of course, the neat thing being that I could add

something to my prototype, on the fly, later, just like we saw before

because the prototype chain is just looking at these objects at the moment you

try to access any one of their methods or properties.

So I could add a getFormalFullName to the prototype later,

and then, console.log(john.getFormalFullName.

And because I've added it to the prototype object already,

when this is called it searches down the prototype chain.

It searches John.

It doesn't find getformalFullName, so it searches its proto,

its own prototype, which is pointing at this right here.

Person.prototype, and I've already added getFormalFullName.

So it finds it down the prototype chain, and so then calls it and

the this keyword is set up properly.

We've already learned that too, and it just works.

So think about this.

That means that any object that I create with this function,

sometime later I can add features to all of those objects

at once by using this .prototype property of the function constructor.

It's pretty neat right?

If I had created a 1000 different objects using new person, I could give them all,

in one stroke, access to a new method later, even after they were created.

So often you'll see, in really good JavaScript code, that properties

are set up inside the function constructor because they're often different values.

We need that.

But methods are sitting on the prototype.

So why wouldn't you add getFullName inside here?

Inside the person object?

You could, inside that function constructor,

inside that object that this is pointing to, but here's the problem.

And remember that functions in JavaScript are objects.

They take up memory space.

Anything you add to them takes up memory space.

So, if I added getFullName, for example,

to every object, then that means every object gets its own

copy of getFullName and takes up more memory space.

If I have 1,000 of these person objects, I'll have 1,000 getFullName methods.

But if I add it to the prototype, I'll only have one.

Even though I have 1,000 objects, I only have this method once.

So, from a efficiency standpoint, it's better to put your

methods on the prototype because they only need one copy to be used.

Make sense?

I need my properties for each object cuz it's going to have

different values per object, but for methods, I only need one.

And when the object calls that method,

the JavaScript engine will go down the prototype chain to find it and find it.

I don't need it to be copied over and over again.

So instead of saying this.getfullName which would put this on every single

object created, I simply put it on the prototype, and it'll get found.

I can still use it just like I would if I had put it directly on the object.

Does that make sense?

I'm saving memory space.

All right, because there's only one prototype for all of these objects, so

it's only in one spot.

So that's function constructors in the prototype.

I can create objects, and the prototype is already set for me.

Then I can just add properties and

methods to the prototype in order to give all of my

objects that I create with this function access to those properties and methods.

Make sense?

Think about this.

Give it a try.

Try it out.

Try out the code.

This is how you use functions and function constructors in setting the prototype.

This is one of the valid ways to create objects and

set their prototype in JavaScript.



*/

