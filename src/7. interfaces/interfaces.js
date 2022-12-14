"use strict";
/*
InterFaces : interfaces serve almost the exact same purpose as type aliases
(with a slightly different syntax).

we can use them to create reusable , modular type that describe the
shapes of objects
(its just like creating types with 'interface' keyword and without equal(' = ') sign.
*/
//Use the type alias in the annotation
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congrats on turning ").concat(age, "! ");
};
sayHappyBirthday({ name: 'Jerry', age: 42 });
var thomas = {
    id: 2333, first: "Thomas",
    last: "Hardy",
    nickname: 'tom'
};
thomas.first = 'hello Ashish';
var thomasB = {
    id: 2333,
    first: "Thomas",
    last: "Hardy",
    nickname: 'tom',
    sayHi: function () { return 'hello world'; },
    sayHello: function () {
        return 'hello buddy';
    },
    greetings: function (ashish) {
        return "hello ".concat(ashish, " ");
    }
    // 
};
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark: function () {
        return 'woof woof!';
    }
};
var jhonny = {
    name: 'johney',
    age: 34,
    breed: 'lab',
    bark: function () {
        return "Bark !";
    },
    job: "guide dog",
    owner: 'i am owner'
};
/*
=============================================
    Difference between interfaces and types
=============================================

1. interface  can only decscribe the shape of an object
2. we can reopen interfaces
3.we can extend properties from another another interface
4.
*/ 
