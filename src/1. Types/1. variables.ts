
// in types script we declare a variable by saying that this is string variable. and its always going to be string .
//  or its number and always a number . same with other data types


// =================================
//        1 . with string
// ================================

// let variable = 'nope'
// variable = '33'

// We can give types to variables in typescripts like this

let myName:string = "Ak Nagar";

// we can redefine it with string 
myName = "Ashish"
myName = 'blah blah'

// we can not redefine it with number that would be wrong like below example
// myName = 938 


// =============================================================
//                2.  with Numbers and booleans
// =============================================================

// same like strings we can also this with Numbers and booleans

// with number
let myNumber: number = 42;      // it always going to be number now 

myNumber = 45
// i can not redefine it again by making it string


//=========== with boolean
let myBooleans: boolean = true
myBooleans = false

// this boolean always going to be boolean



// =======================================
//                3.  Type any
// =======================================
// the any type - with typ e any typescript doesn't check type . 

let thing : any  = "hello world"
thing = 2
thing = false              // i can only do this with type any


 



