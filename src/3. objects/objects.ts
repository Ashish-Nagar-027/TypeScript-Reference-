/* 
objects can be typed by declaring what the object should like in the annotation.

Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!

*/



const dog = {
    name: 'Elton',
    breed: "Australian Shepherd",
    age: 0.5
}

// ex
let person : {name: string};
person = {name: 'john'}

//optional property
let anotherPerson : {name : string, age? : number}
// using ? with age makes it optional property
anotherPerson = {name : 'jack'}
anotherPerson = {name : 'jack', age : 30}


// a function with an object type parameter
function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`);
}

printName( { first: "Ashish", last: "Nagar"} )


let coordinate: { x:number; y:number} = { x: 34, y: 2};

function randomCoordinate(): {x: number, y: number} {
    return  {x: Math.random(), y: Math.random()}
}



/*  
===============================
    access properties
==============================
*/
// printName( { first: "mick" , last: "jagger", age: 455 } )  // not Doable

const singer = { first: "mick" , last: "jagger" ,age:455, isAlive: true}
printName(singer)       //Doable




/*  
===============================
       4. Type Alias
==============================

instead of writing out object types in an annotation , we can decalre them separaetly in a type alias, 
which is simple the desired shape of the object 

This allows us to make our code more readable and even reuse the types
elsewhere in our code
*/

type Point  = {x: number; y: number; }             
 // i can reuse point 


let coordinateA: Point  = {x: 34 , y: 2}

function randomCoordinateA(): Point {
    return {x: Math.random() , y: Math.random()};
}

function doublePoint(Point: Point) : Point {
    return { x: Point.x * 2, y: Point.y * 2 }
}

 



/* 
===============================
       5. for Nested object 
==============================
*/

// A function with a nested obect type parameter

const describePerson = ( person: {
    names: string;
    age: number;
    parentNames: {
        mom: string;
        dad: string;
    }
}) => {
    return `
    Person: ${person.names},
    age: ${person.age}
`
}

describePerson( {names: 'Jimmy', age: 19, parentNames: {mom: 'kim', dad: 'steave'}} );



// function expample 2

type Song = {
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: {producer: string, writer: string },
}

function calculatePayOut(song: Song): number {
       return song.numStreams * 0.0033
}


function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: 'Unchained Melody',
    artist: 'Righteour Brother',
    numStreams: 12345534,
    credits: {
        producer: 'Pil Specotr',
        writer: "Elex North"
    }
}

calculatePayOut(mySong)




/* 
===============================
    6.  optional properties
==============================
*/

// we can write ' ? ' with propertyname to make property optional


type PointB = {
    x: number,
    y: number,
    z ? : number   // this property is opetional
}

const myPointB1: PointB = { x:1, y: 3 }

const myPointB2: PointB = { x:4 ,y: 19, z:23 }


/* 
===============================
     7. readonly modifier
==============================
After putting 'readonly' keyward with any object property we can only read it.
we can change it

*/



type User = {
    readonly id: number;
    userName : string
}

const user: User = {
    id : 544,
    userName : 'Ashish'
}

// i can read and change userName 
user.userName = 'hello world' 

// i can read id 
console.log(user.id); // sahi hai

// i can't chage id
// user.id = 4444
         


/* 
===============================
     8. intersection types
==============================

we can do intersection with two types
*/


type Circle = {
    radious: number
}

type ColorFull = {
    color: string
}

// now i can do intersection with above two properties

type ColorFullCircle = Circle & ColorFull          // it will work

const happyface: ColorFullCircle = {
    radious : 4,
    color:'yellow'
}

// if i want to add something extraa
type somethingExtraa = Circle & ColorFull & { id : number }



