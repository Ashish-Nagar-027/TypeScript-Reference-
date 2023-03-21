

/* 
===========================
         Typeof 
===========================

typeof Type Gaurds involve simpley doing a type check before working witha  value.

Since unions allow multiple types for a value,
we can first check what came through before working with it

*/


function triple(value: number | string){
    if (typeof value === "number") {
        return value * 4
    }
    return value.length
}


/* 
===========================
         Truthiness Gaurds 
===========================

Truthiness type Gaurds  invole checking a value for for being truthy or falsy before working with it.


This is helpful in avoiding errors when values might be null or undefined.
*/

const printLetters = (word: string | null) => {
    if(!word){
        console.log('NO word was provided')
    }
    else{
        word.length
    }
}




/* 
===========================
  Equality Narrowing
===========================

equality Type Guards involve comparing types to each other
before doing certain operations with values.
By checking two values agains one another , wec an be sure they're both the same before working with them ina type-specific way

*/

function someDemeo(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase()
    }
}



/* 
===========================
     in  operator
===========================

*/

const pet = {name: 'kitty', age: 20  }

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}


function getRuntime(media: Movie | TVShow) {
    if('numEpisodes' in media){
       return media.numEpisodes * media.episodeDuration
    }
}

getRuntime({ title: "Amedeus", duration: 120 })



/* 
===========================
     instance of Narrowing
===========================

instanceof is Javascript operator that alllows uss to checck if one thing is an instance of another thing or not .( remember prototypes?)

This can help us narrow types when woking with things like classes 
*/
 
function printFullDate(date: Date | string) {
    if(date instanceof Date) {
        console.log(date.toUTCString()) 
    }
    else {
        console.log(new Date(date).toUTCString())
    }
}


// ===================================

class UserPerson {
    constructor(public username: string){}
}


class Company {
    constructor (public name : string) {}
}




/* 
===========================
    Type predicates
===========================

Typescript allows us to write custom functions that can narrow the type of a value These function have a very special return type call a type predicate

A predicate take the form parameterName is Type
*/

interface Cat {
    name: string;
    numLives : number
}

interface Dog {
    name: string ,
    breed: string
}



function isCat(animal: Cat | Dog): animal is Cat {
    return (pet as Dog).bark !== undefined
}

function makeNoise(animal: Cat | Dog)  {
    if(isCat(animal)){
        animal
        return('meao')
    } else {
        animal
    }
}



/* 
===========================
    discriminated unions
===========================

A common pattern in Typescript involes creating a literal property that is common across multiple types.

we can then narrow the type using that literal property
*/


interface Rooster {
    name: string;
    weight: number;
    age:number;
    kind: "rooster"
}

interface Cow {
    name: string;
    weight: number;
    age:number;
    kind: "cow"
}

interface Pig {
    name: string;
    weight: number;
    age:number;
    kind: "pig"
}

type FarmAnimal = Pig | Rooster | Cow 

function getFarmAnimalSound(animal : FarmAnimal) {
    switch (animal.kind) {
        case "pig": 
           return "Oink!";
        case "cow": 
            return "Moo!"
        case "rooster": 
            return "Cockadoodledoo!!"
        default : 
           // we should never make it here , if we handled all case correctly
           const shouldNevGetHere: never = animal
    }
}


const stevie: Rooster = {
      name: 'stevie chicks',
      weight: 2,
      age: 1.4,
      kind : 'rooster'
}

