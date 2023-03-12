/*
Tuples : Tuples are a special type exclusive to TypeScript
(They don't exist in JS)

Tuples are arrays of fixed length and ordered with specific types - like super
rigid arrays.


 */


//creating a Tuple with its type definition
let myTuple: [number, string]    // this is tuple. it has fixed types (number, string)  and fixed length 2

//can assign it values per its specs
myTuple = [10, 'TypeScript is fun!']

// Can't Assign it values of a dif structre
// myTuple = ['Typescript is fun', 10]  

  
// ex  -  fixed rgb color which can only have 3 values
const color: [number, number, number] = [244, 0, 255 ]

//ex
type HTTPResponse = [number, string];

const goodeRes : HTTPResponse = [200, "OK"]

// There is limitations with tuple because i can push() ,pop() values in tuple
goodeRes.push(123)   // its valid , its just weird thing





