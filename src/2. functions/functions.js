"use strict";
function square(num) {
    // num.toUpperCase() 
    return num * num;
}
// square("ashish")
// square(true)
square(4);
function greet(person) {
    // person * person
    return "Hi there ".concat(person);
}
// greet(3)
// greet(true)
greet('ashish');
// ===========================================================
// Array function
var dosomething = function (person, age, isfunny) { };
dosomething('chickenFace', 45, false);
// ==================================================
// 
// default parameters
function greeting(person) {
    if (person === void 0) { person = 'ashish'; }
    return "hello there ".concat(person);
}
greeting();
// ===================================================
// =====================================================
// creating a function with a return type
var addNums = function (x, y) {
    return x + y;
};
// its not alwasys necesory because typescipt does it itselt.  but we can do this 
// ===================================================
//        anonymous function
// =====================================================
var colors = ['red', 'blue', 'yellow'];
colors.map(function (color) {
    return color.toUpperCase();
});
// =================================================== 
//          void type
// =====================================================
// A function that doesn't return anything 
var annoyUser = function (num) {
    for (var i = 0; i < num; i++) {
        alert('Hiiii!!!');
    }
};
// its a way of saying that this function doesn't return anything
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    //  this function returns nothing so its void type
}
// =================================================== 
//            never type
// ===================================================
/*

The Never type represents values that Never occur .
we might use it to annotate a function that always throws an exception ,
or a funtion that never finishes executing

Don't confuse with void - void returns undefined or null, which is technically still a type of value.
with Never, a function doesn't even finish executing.

// example  of never
*/
function makeError(msg) {
    throw new Error(msg);
}
// or
// it can be function that never stops
function gameLoop() {
    while (true) {
        console.log('game loop running');
    }
    // i can't use return in this function
    // because of never
}
