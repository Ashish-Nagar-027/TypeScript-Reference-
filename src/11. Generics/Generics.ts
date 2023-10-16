// Generics in TypeScript are a way to write reusable code that can work with different types of data. This is done by using type parameters, which are placeholders for types that can be specified when the code is used.

// Generics can be used with functions, classes, and interfaces.
// Generics are defined using type parameters within angle brackets <> after the name of a component (function, class, interface).

// Type parameters act as placeholders for the actual type that will be passed to the component.

// This allows you to create generic components that can work with different data types.

// The syntax is not pretty . they are used all over the place, so it's best to get comforatble with them.

// some built in generics

// array  with this syntax
const nums : Array<number> = []
const colorrs : Array<string> = []

// in dom elements we can provide this like 
// 
const inputEl = document.querySelector<HTMLInputElement>('#username')
const btn = document.querySelector<HTMLButtonElement>('#btn')





// ==================================
//    writing our first generic fun
// ==================================

function identity<Type>(item: Type) : Type{
    return item
}
// its a function which return the same type as we send as param
identity<number>(7)
identity<string>('hello')


//===========================
//interface with generics
//===========================


interface  IAuthor{
    id: number;
    username: string
}

interface  ICategory{
    id: number;
    username: string
}

// without generic
interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[]
}

// with generic
interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[]
}
const testMe : IPostBetter<string> = {
    id: 1,
     title: "Post title",
     desc: "post desc",
     extra: ["str", "str2"]
}



// another generic

// this function returns random item from an array of same type of array
function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx]
}

console.log(getRandomElement<string>(["a", "b", "c"]))

getRandomElement<number>([1,3,54])

// getRandomElement([1,3,54])


//  ==============================
//  generics funtion of mulitple type
//===============================


function merge<T, U>(object1:T , object2: U){
    return {
        ...object1,
        ...object2
    }
}

// this function will return intersection of these two objeccts

const comboObj = merge({name: 'colt'}, {pets: ['blue', "elton"]})



// to make merge function better i can give types of T and U . current i can send anything there . 

const comboObj3 = merge({name: 'colt'}, 2)      // valid currently


//but if i want to send only objects there then i can use extends keyword to give them type;

function mergee<T extends object, U extends object>(object1: T, object2: U){
    return {
        ...object1,
        ...object2
    }
}

// now this function will only expects objects



// another expample

interface Lengthy {
    length: number
}

function  printDoubleLength<T extends Lengthy>(thing: T) :number{
    return thing.length * 2
}

printDoubleLength('3343daf')


//  ==============================
//   default params
//===============================

function makeEmptyArray<T = number>():T[] {
    return []
}


const num =  makeEmptyArray() // by default it will return number i can change it

const boolean = makeEmptyArray<boolean>()    



// ==============================
//    generic classess
//===============================


interface song {
    title: string,
    artist: string
}

interface video {
     title:string,
     creator: string,
     reoslation : string
}


class Playlist<T>{
    public queue: T[] = []
    add(el: T){
        this.queue.push(el)
    }
}

const songs = new Playlist<Song>()
const video = new Playlist<video>()
