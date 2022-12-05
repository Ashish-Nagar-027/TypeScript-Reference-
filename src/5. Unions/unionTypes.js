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
