/* 
Array can typed using a type annotation followed by empty array brackets, like number[]
for an Array of numbers
*/

// string Array 
let names: string[] = ['hello', 'world'];

// number array
let ages: number[] = [122,233,4563,313]


// 
const bools: boolean[] = []



// AlterNative Syntax
let Myname: Array < string > = ['hello', 'world' ]

let myAge: Array < number > = [12,34,454,546]

//note : These array only allow data of that one type inside them




/*
================================
     Empty Array
================================
 */

const activeUser: [] = []                // this is empty array i can not put values in it



/*
================================
       Array of type object
================================
 */
type point = {
    x: number;
    y: number
}

const coords: point[] = []
coords.push({x: 23, y: 8})




/*
================================
     multidimensial Array
================================
 */

// two dimensial rray
const board: string[][] = [ ["X", "O", "X"],["X", "O", "X"], ["X", "O", "X"] ]

//  we can also create more dimensial array if we need
