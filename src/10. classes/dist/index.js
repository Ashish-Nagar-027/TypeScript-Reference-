"use strict";
var _Player_newScore;
console.log('classes Recap js');
//  classes are templates for creating objects in javascript . they contain  a few different important pieces which allow for creation and extension of customized (and nicely oraganized) objectts.
// classes allow us to create patterns that  describes objects. 
class Player {
    constructor(first, last) {
        this.score = 0;
        _Player_newScore.set(this, 0);
        this.first = first;
        this.last = last;
    }
}
_Player_newScore = new WeakMap();
const elton = new Player("Elton", "Steele");
// i can also make properties and readonly 
//  we can make properties of class private or public . this idea only exist in ts ,not in js.
// by default in js and in ts every single method or property in considerd as public .
// private properties are only accessable inside the class.
// we can also make private properties  with js syntax (using )
// ===========================================
//       parameters properties shorthand 
// ===========================================
// we can also write above code like this in sorthand
class NewPlayer {
    // readonly first: string;     
    // public last:string;        
    // private score : number = 0        
    // #newScore : number = 0        
    // constructor(first: string, last: string){
    //     this.first = first;
    //     this.last = last;
    // }
    constructor(first, last, score) {
        this.score = score;
    }
}
const newPlayer = new NewPlayer('elton', 'steel', 100);
// its valid syntax
// ===========================================
//       getters and setters
// ===========================================
class newGamePlayer {
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
    get fullName() {
        return this.first + " " + this.last;
    }
    set updateScore(newScore) {
        if (newScore < 0) {
            throw new Error("score can not ne negative");
        }
        this.score = newScore;
    }
}
const playboy = new newGamePlayer('elton', 'steel', 10);
console.log(playboy.fullName);
playboy.updateScore = 99;
// ===========================================
//      the protected  modifier
// ===========================================
/*
we have private and public keyword  in class to make them private and public.

private properties in class are only accessable inside itselt . i can not access them outside class.
But what  if i want to use this class as parent class and want to access its private properties inside only child class.
its not posssible with child class.

so what i can do is  , instead of making properties private i can make them protectect . now these protected properties will be
only accessable inside parent and child class.

to make properties private i just need to use "protected " keyword instead of private.

*/
// public available anywhere
// private available only in class itself. only in main class
// protected abailable in class itself and any other class which is inherited from the main class.
//===============================================================
//===============================================================
//===============================================================
// 'implements' keyword for using interface in class
// ================================
//     Abstract keywords classes
// ================================
//  by using abstract keyword in class we can no longer make instances from the class
// with abstract class we define  methods that must be implemented in the child class
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // every instances/sub classes from emplyee class must have getPay() method
    greet() {
        console.log('hello!!');
    }
}
class fullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return 12;
    }
}
class PartTimeEmployee extends Employee {
    getPay() {
        return 223;
    }
}
const betty = new fullTimeEmployee("Betty", "white", 333);
console.log(betty.getPay());
