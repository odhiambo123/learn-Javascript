// long running function

/*

Now if I click while the long-running function is running,

while it's executing, what should happen?

Well, the browser is going to place that click event on the event queue, but

when is JavaScript going to look at that event queue and process it?

**/
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');
/*


Notice that the function completed, and the global code completed, before

it went off and created an execution context for that clickHandler function.

Why?

Because the JavaScript engine won't look at the event queue until the stack

is empty.

So that means long-running functions can actually interrupt events being handled.



Why?

Because the JavaScript engine won't look at the event queue until the stack

is empty.
**/