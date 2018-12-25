(function(global, $) {
    
    
    
}(window, jQuery));

/**

build our own little mini framework library.

Frameworks and libraries are similar concepts,

although frameworks are a more complex.

Because we're focusing on structure.


let's build our own mini-framework/library.

And let's build something that you could use in a project if you wanted to or

in many projects.

REQUIREMENTS 
What should the software do?


Let's call it ourtounges.

focus on the concept and not get lost in the implementation.


wanted to build a library or frame work that helps us give greetings in different languages.

Maybe for when I'm on a website and someone logs in I can show them a greeting after they login in

I'd like to do it in different languages, depending on

what language they choose, their preferred language in the application.

Something like that.


When I'm given a first name, a last name and an optional language, it should

generate formal and informal greetings that I could use throughout my app.



It should support all the native languages languages

It should be reusable, meaning that it won't interfere with any of the other JavaScript code in my app,

and someone else can just grab it and use it in their apps.

And lastly, even though it's called ourtongues, I'd like to have an easy to type structure, kind of jQuery like, and

a A$, like the dollar sign for jQuery.

Let's do A$.

All my developers use jQuery on a lot of their projects. So ourtongues should also support jQuery.

Even though it returns greetings what we'd like is to be able to give it a jQuery

object that points at some HTML element.

And it'll fill that element with the greeting.

So I could just pass my ourtongues, let's say a div or

a span in my HTML that just contains text.

And it'll fill that with my appropriate greeting text.

All right, so that's the requirement of our ourtongues framework/library.



*/