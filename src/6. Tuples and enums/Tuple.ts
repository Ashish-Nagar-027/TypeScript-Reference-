/*
Tuples : Tuples are a special type exclusive to TypeScript
(They don't exist in JS)

Tuples are arrays of fixed length and ordered with specific types - like super
rigid arrays.


 */

import { Http2ServerResponse } from "http2"

//creating a Tuple with its type definition
let myTuple: [number, string]

//can assign it values per its specs
myTuple = [10, 'TypeScript is fun!']

// Can't Assign it values of a dif structre
// myTuple = ['Typescript is fun', 10]

  
// ex 
const color: [number, number, number] = [244, 0, 255 ]


//ex
type HTTPResponse = [number, string];

const goodeRes : HTTPResponse = [200, "OK"]

// There is limitations with tuple because i can push() ,pop() values in tuple

