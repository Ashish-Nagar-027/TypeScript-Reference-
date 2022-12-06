"use strict";
/*

Union types allow us to give a value a few different possible types.
If the eventual value's type is included, Typescript will be happy.


we can create a union type by using the single ' | '  (pipe Charcter ) to speparate the types we want to include.
it's like saying, " This thing is allowed to be this, this, or this ."

.TypeScript will enforce it from there

 */
// ex 1
var age = 21;
age = 23;
age = '34';
age = true;
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
// ex 3 
function calulateTax(price, tax) {
    if (typeof price === "string") {
        price.replace("$", "");
    }
    else {
        return price * tax;
    }
}
/*
================================
    Union Types and Arrays
================================
*/
// writing different types data types in one array
var stuff = [12, 34, 53, 534, 'ashish', true, {}];
// for specific data types
var stuff2 = ['ashishi', 344, 'sfas'];
/*
================================
    Literal Types
================================

Literal types are not just types -but the value themselves too !

on it's own , that's not super helpful.
but combine it with somthing like unions and you have very fine-tuned type options for Typescript
to enforce
*/
// -----------------------------------------------
// ex 1
// A function with a literal + union type parameter 
var giveAnswer = function (answer) {
    return "The answer is ".concat(answer);
};
//can provide one of the literals in the union
giveAnswer('no');
//can't providde anything else
// giveAnswer('oh boy i m not sure')
// -----------------------------------------------
// ex 
var zero = 0;
var mood = "Happy";
var today = " Monday ";
