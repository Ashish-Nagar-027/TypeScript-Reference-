/* 
InterFaces : interfaces serve almost the exact same purpose as type aliases
(with a slightly different syntax).

we can use them to create reusable , modular type that describe the 
shapes of objects
(its just like creating types with 'interface' keyword and without equal(' = ') sign.
*/

//An interface !
 interface Person {
    name: string;
    age: number;
 }

 //Use the type alias in the annotation
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
    nickname? : string
}


const thomas: PersonA = {
    id: 2333, first: "Thomas", 
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
    sayHi: () => string   ;            //it's method in ts. it's with no argument
    sayHello(): string;         //it's alternative syntax 

    // methods with arguments
    greetings(nameee: string): string
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

*/


interface Dog {
       name: string;
       age: number;
}

interface Dog {
    breed: string;
    bark(): string
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return 'woof woof!'
    }
}



// extend interface - we can extext interface    

interface owner {
    owner: string
}

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



/* 
=============================================
    Difference between interfaces and types
=============================================

1. interface  can only decscribe the shape of an object 
2. we can reopen interfaces
3.we can extend properties from another another interface
4.
*/