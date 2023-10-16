
//Array 

let newNames = ["john", "jane", "tom"] 
// this is string array , you can only push string in this

//newNames.push(3) // error
newNames.push('jake')  //valid

let newNumbers = [11,22,12] 
// this is number array you can only push numbers in it
newNumbers.push(32)
// newNumbers.push(true)  // error


/* 
===========================
 Defining array type

Array can typed using a type annotation followed by empty array brackets, like number[]
for an Array of numbers
============================
*/


// empty array
let emptyArray: [] = []

// any array
let newArray: any[] = []

// string Array 
let names: string[] = ['hello', 'world'];

// number array
let ages: number[] = [122,233,4563,313]

// boolean array
const bools: boolean[] = []
bools.push(true)

// ==========
// if you  want to push multiple type on same array
// then you can use union type (next chapter)
// unioun type
//============
let testStringOrNumberArr: (string | number)[]
testStringOrNumberArr = [1, 'two' , 3]





// AlterNative Syntax
let Myname: Array <string> = ['hello', 'world' ]
let myAge: Array <number> = [12,34,454,546]

//note : These array only allow 
// data of that one type inside them

/*
================================
     Empty Array
================================
 */

const activeUser: [] = []                
// this is empty array i can not put values in it
// activeUser.push('sta') // error

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


