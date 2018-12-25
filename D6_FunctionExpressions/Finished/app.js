greet();

function greet() {
    console.log('hi');   
}

//create an anonymous function by storing it in a variable
var anonymousGreet = function() {
    console.log('hi');   
}

anonymousGreet();

function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});


