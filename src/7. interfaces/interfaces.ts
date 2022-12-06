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


const thomas: PersonA = {id: 2333, first: "Thomas", last:"Hardy", nickname:'tom' }

thomas.first = 'hello Ashish'
// thomas.id = 123                  // can't change id 


