/*

Union types allow us to give a value a few different possible types.
If the eventual value's type is included, Typescript will be happy.


we can create a union type by using the single ' | '  (pipe Charcter ) to speparate the types we want to include.
it's like saying, " This thing is allowed to be this, this, or this ."

.TypeScript will enforce it from there

 */

// ex 1
let age : number | string | boolean  = 21;
age = 23;
age = '34'
age = true

// ex 2

// ================
  
//    type aleases

// ====================
type PointC = {
    x: number;
    y: number;
} ;

type Loc = {
    lat: number;
    long: number;
}

type stringA = {
    name: string,
    lastName: string
}

let coordinates: PointC | Loc | stringA = {x: 1, y:34}
coordinates = { lat: 321.213,long: 23.334 }
coordinates = { name: "ashish", lastName: 'last' }


 

// Unions - Narrowing the Type  => Narrowing th Typpe is simply doing a type check before working with a value. if your value is a string you may awant to use it deifferently than if you got a number .  

// since unions allow multiple type for a value , its  good to check what came through before working with it.

// ex  - type narrowing
function calulateTax(price: number | string, tax: number) {
    if(typeof price === "string") {
      price= price.replace("$", "")
      return
    }
    return price * tax
}



/*
================================
    Union Types and Arrays
================================
*/
// writing different types data types in one array

const stuff : any[] = [12, 34, 53,534, 'ashish', true, {}]

// for specific data types
const  stuff2 : (number | string)[] = ['ashishi', 344,'sfas']



/*
================================
    Literal Types
================================

Literal types are not just types - but the value themselves too !

on it's own , that's not super helpful. 
but combine it with somthing like unions and you have very fine-tuned type options for Typescript 
to enforce
*/
// -----------------------------------------------
// ex 1

// A function with a literal + union type parameter 
const giveAnswer = ( answer: 'yes' | 'no' | 'maybe' ) => {
    return `The answer is ${answer}`;
}

//can provide one of the literals in the union
giveAnswer('no')

//can't providde anything else
// giveAnswer('oh boy i m not sure')

// -----------------------------------------------

// ex 
let zero: 0 = 0;    
// Here 0  is the literal type it can only have value of 0

let mood: 'Happy'| "sad" = "Happy"



type DayOfWeek = " Monday " | " TuesDay " | "Wednesday " | "Thursday " | "friday " | " saturday" | " sunday " 


let today: DayOfWeek = " Monday "
