"use strict";
/*
objects can be typed by declaring what the object should like in the annotation.

Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!

*/
var dog = {
    name: 'Elton',
    breed: "Australian Shepherd",
    age: 0.5
};
// a function with an object type parameter
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Ashish", last: "Nagar" });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
/*
===============================
    access properties
==============================
*/
// printName( { first: "mick" , last: "jagger", age: 455 } )  // not Doable
var singer = { first: "mick", last: "jagger", age: 455, isAlive: true };
printName(singer); //Doable
// i can reuse point 
var coordinateA = { x: 34, y: 2 };
function randomCoordinateA() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(Point) {
    return { x: Point.x * 2, y: Point.y * 2 };
}
/*
===============================
       5. for Nested object
==============================
*/
// A function with a nested obect type parameter
var describePerson = function (person) {
    return "\n    Person: ".concat(person.names, ",\n    age: ").concat(person.age, "\n");
};
describePerson({ names: 'Jimmy', age: 19, parentNames: { mom: 'kim', dad: 'steave' } });
function calculatePayOut(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'Unchained Melody',
    artist: 'Righteour Brother',
    numStreams: 12345534,
    credits: {
        producer: 'Pil Specotr',
        writer: "Elex North"
    }
};
calculatePayOut(mySong);
var myPointB1 = { x: 1, y: 3 };
var myPointB2 = { x: 4, y: 19, z: 23 };
var user = {
    id: 544,
    userName: 'Ashish'
};
// i can read and change userName 
user.userName = 'hello world';
// i can read id 
console.log(user.id); // sahi hai
var happyface = {
    radious: 4,
    color: 'yellow'
};
