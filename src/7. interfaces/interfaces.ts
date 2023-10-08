/* 
InterFaces : interfaces serve almost the exact same purpose as type aliases
(with a slightly different syntax).

interfaces allows us to describe shape of objects and only objects. this is only for object.

we can use them to create reusable , modular type that describe the 
shapes of objects
(its just like creating types with 'interface' keyword and without equal(' = ') sign.

*/

//An interface !
 interface Person {
    name: string;
    age: number;
 }

 // =======================================================

 //Use the type alias in the annotation

 //============================================================
 const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${age}! `;
 }

 sayHappyBirthday({name: 'Jerry', age: 42});



/* 
=============================================
     Readonly and optional interface 
=============================================


works same as types
*/

interface PersonA {
    readonly id: number;
    first : string;
    last: string;
    nickname? : string                  // this will be optional property
}


const thomas: PersonA = {
    id: 2333, 
    first: "Thomas", 
    last:"Hardy", 
    nickname:'tom' 
}

thomas.first = 'hello Ashish'
// thomas.id = 123                  // can't change id 



/* 
=============================================
     methods
=============================================

we can also add methods in interfacces 
methods can also recevies arguments
*/

interface PersonB {
    readonly id: number;
    first : string;
    last: string;
    nickname? : string;
    sayHi: () => string   ;            //it's method and it returns string . it's with no argument 
    sayHello(): string;         //it's alternative syntax 

    // methods with arguments
    greetings(nameee: string): string              // this will take argument
}

const thomasB: PersonB = {
    id: 2333,
    first: "Thomas", 
    last:"Hardy", 
    nickname:'tom' ,
    sayHi: () => {return 'hello world'},
    sayHello: () => {
        return 'hello buddy'
    },
    greetings( ashish : string) {
               return `hello ${ashish} `
    }
    // 
} 






/* 
=============================================
        combineing or Reopening interface
=============================================
 
we can combine interfaces . combined interface will keep all properties
we can reopen and add some property .
*/

// interface 1
interface Dog {
       name: string;
       age: number;
}

// interface 2     (interface is reopening 2 )
interface Dog {
    breed: string;
    bark(): string
}

//  combined interface  with interface 1 and interface 2
const eltons: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return 'woof woof!'
    }
}


//===============================================

// extend interface - we can extext interface    

//===============================================


interface owner {
    owner: string
}

// this is extendig from last two interfaces
interface ServiceDog extends Dog,owner {
    job: "drug sniffer" | "bomb" | "guide dog"
}

const jhonny: ServiceDog = {
    name: 'johney',
    age:34,
    breed:'lab',
    bark() {
        return "Bark !"
    },
    job : "guide dog",
    owner: 'i am owner'
}

// when we extend interface , we can actually extend multiple interface.so we are limited to single inheritence model.

interface PersonZ  {
    names: string
}

interface EmplyeeZ {
  readonly id: number,
  email: string
}

interface Engineer extends PersonZ,EmplyeeZ{
    level: string,
    language: string []
}


const Human: Engineer  = {
    names : 'string',
    id : 12333232,
    email: 'ashish@mail.com',
    level: "senior",
    language : ['js', 'python']
  
}



/* 
======================================
    Difference between interfaces and types
=============================================

1. interface  can only decscribe the shape of an object  but types alias can discribe any sort of types
2. we can reopen interfaces 
3.we can extend properties from another another interface 
you can't do that with types
(although we can use & keyword there )
*/


interface practicePerson{
    name : string;
    id ? : number;
    age : number
}

let p: practicePerson
p = {name: 'john wick', age: 50 }