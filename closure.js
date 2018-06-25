// Challenge One  Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
function createFunction() {
    return function () {
        console.log('hello')
    }
}
var function1 = createFunction();
function1();

// Challenge Two  Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
function createFunctionPrinter(input) {

    return function () {
        console.log(input);
    }
}
// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();

// Challenge Three  Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing.

function outer() {
    var counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();    // 1
willCounter();    // 2
willCounter();    // 3

jasCounter();     // 1
willCounter();    // 4

// Challenge Four  Now we are going to create a function addByX that returns a function that will add an input by x.
function addByX(x) {
    // const counter = 0;
    return function (y) {
        // counter + x;
        console.log(y + x);
        return y + x;
    }

}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
addByTwo(1); // 3

// now call addByTwo with an input of 2
addByTwo(2);  // 4