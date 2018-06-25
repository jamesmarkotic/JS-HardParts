// Challenge 1  Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
    return num + 2;
}

// Challenge 2  Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
    return word + 's';
}

// // Challenge 3  Create a function called map that takes two inputs
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

function map(array, callback) {
    const storage = [];
    for (let i = 0; i < array.length; i++) {
        storage.push(array[i] + 2)
    }
    return storage;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4  The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
function forEach(array, callback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});

//   console.log(alphabet);

//Extension 1  In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
function mapWith(array, callback) {
    var newArr = [];
    array.forEach(function (el) {
        newArr.push(callback(el));
    });
    return newArr;
}

console.log(mapWith([1, 2, 3], addTwo));

// Extension 2  The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
function reduce(array, callback, initialValue) {
    var accumulator = initialValue;
    array.forEach(function (el) {
        accumulator = callback(accumulator, el);
    });
    return accumulator;
}
var letters = ['a', 'b', 'c', 'd'];
var abc = '';
var nums = [4, 1, 3];
var add = function (a, b) {
    return a + b;
};
var reduceTest1 = reduce(nums, add, 0); //-> 8
var reduceTest2 = reduce(letters, function (a, b) { return a + b; }, abc);
console.log(reduceTest1);
console.log(reduceTest2);
