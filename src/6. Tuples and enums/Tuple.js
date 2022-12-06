"use strict";
/*
Tuples : Tuples are a special type exclusive to TypeScript
(They don't exist in JS)

Tuples are arrays of fixed length and ordered with specific types - like super
rigid arrays.


 */
Object.defineProperty(exports, "__esModule", { value: true });
//creating a Tuple with its type definition
var myTuple;
//can assign it values per its specs
myTuple = [10, 'TypeScript is fun!'];
// Can't Assign it values of a dif structre
// myTuple = ['Typescript is fun', 10]
// ex 
var color = [244, 0, 255];
var goodeRes = [200, "OK"];
// There is limitations with tuple because i can push() ,pop() values in tuple
