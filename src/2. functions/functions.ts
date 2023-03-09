

function square(num: number) {
    // num.toUpperCase() 
    return num * num
}

// square("ashish")
// square(true)

square(4)


function greet(person: string){
    // person * person
    return `Hi there ${person}`
}

// greet(3)
// greet(true)
greet('ashish')


// ===========================================================

// Array function
const dosomething = (person: string, age: number, isfunny: boolean) => {}

dosomething('chickenFace', 45, false )


// ==================================================
// 
// default parameters

function greeting(person: string = 'ashish'){
    return `hello there ${person}`  
}

greeting()



// ===================================================
// =====================================================

// creating a function with a return type
const addNums = (x: number, y: number): number => {
    return x + y
}
// its not alwasys necesory because typescipt does it itselt.  but we can do this 



// ===================================================
//        anonymous function
// =====================================================

const colors = ['red', 'blue', 'yellow']

colors.map(color => {
    return color.toUpperCase()
})



// =================================================== 
//          void type
// =====================================================

// A function that doesn't return anything 
const annoyUser = (num: number): void => {
    for(let i = 0;  i < num; i++) {
        alert('Hiiii!!!');
    }
}
// its a way of saying that this function doesn't return anything

function printTwice(msg: string) {
     console.log(msg)
     console.log(msg)

    //  this function returns nothing so its void type
}




// =================================================== 
//            never type
// ===================================================
/* 

The Never type represents values that Never occur . 
we might use it to annotate a function that always throws an exception , 
or a funtion that never finishes executing 

Don't confuse with void - void returns undefined or null, which is technically still a type of value.
with Never, a function doesn't even finish executing.

// example  of never
*/

function makeError(msg: string): never {
    throw new Error(msg)
}

// or
// it can be function that never stops
function gameLoop(): never {
    while(true) {
        console.log('game loop running');
    }
    // i can't use return in this function
    // because of never
}

