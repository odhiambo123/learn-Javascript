/*

But still, these things are interesting, and parts of, in some ways, the things that people find odd, or weird, or difficult to get used to.

So let's start with initialization.

We've seen how we can use object literals, array literals, and

function expressions to set up our objects, arrays, and functions.

What I find as when folks who aren't yet

used to all that literal notation come across a large initialization

of objects in JavaScript, they can get a little overwhelmed by the syntax.

For example, maybe I'm gonna create an array of people, so

I use my array literal, my brackets.

Then I'm going to put my first element in my array, and it's an object,

so I use an object literal.

And then maybe I give it a property,

so here's my name value pairs, another name value pair.

Then maybe some addresses which are also an array, so I put brackets there.

And I do maybe a couple of addresses.

And then I'm gonna do my second element in my array.

So maybe this is Jane, similar, other addresses.

And as you can see as we're typing, it starts to get large and

those that aren't used to it can be a bit intimidated by what they're looking at.

Maybe I'll also add for

Jane a function expression that defines the method for that object.

So, when you look at this, when this gets extremely large,

a lot of data, it can get a bit intimidating.

And maybe, even, there might be some comments,

as we mentioned in our, let's do the john object,

as we mentioned in our white space lesson.

But don't be intimidated.

This is really clean and useful way to initialize data.

And it's also really nice for prototyping.

Say you're building some software that's not yet connected to a database or an API.

You can easily set up some data like this to use in your interface.

So that you can see what it will look like.

And then, when you're ready, you can have this object get its data,

maybe via some JSON, from an API.

And your interface is already ready for data that looks like this.

You can do testing, you could use ability test.

Your interface CF users can use it all right,

before you go down, the road of implementing the full software.

So that's good.

*/

var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';   
        }
    }
]

console.log(people);



/**


Also a good IVE, that is a good

program to do your actual typing in, your actual programming in, is good.

Brackets, for example, nicely highlights where my brackets and

curly braces, should be.

If you do find yourself missing little things, commas are the most often to miss

when you're doing a big initialization like this.

You'll likely see an error message that looks something like this,

unexpected something.

An unexpected token maybe or, maybe if you miss a comma inside an array.

An unexpected string or number.

This just means the syntax parser is going through and has certain expectations.

And it sees something that it doesn't expect.

Like, without that comma, it doesn't expect to see a starting curly brace.

So it says, well, that's unexpected.

So, when you see those kinds of errors when you have a big initialization like

this, you just need to figure out where you're missing either your closing or

opening brackets or braces, your colon, or your comma.

I also find that people will occasionally do this.

They'll accidentally use equals instead of colon cuz they're thinking

in terms of setting variables.

And so you'll get that unexpected token again.

When I'm doing literal syntax object literal these are colons not equal signs.

So those are just some tips.

This can be very useful to set up a lot of data quickly and

try it out in your interface.

So don't be intimidated when you see large initializations of arrays and

objects, it’s useful.

And if we console.log this people array, which is this top level

variable being initialized, and I refresh and I have two objects.

That has a length of two inside my John Doe object.

I have my addresses.

And then I have my second element in my array which is my Jane Doe object,

which has addresses and a greet method.

And so I can do something like people the Jane object greet, and there we go.

So my array is nicely initialized and full of data.

So, this is useful.

That's initialization.

**/