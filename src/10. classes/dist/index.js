"use strict";

console.log("classes Recap js");

//  classes are templates for creating objects in javascript . they contain  a few different important pieces which allow for creation and extension of customized (and nicely oraganized) objectts.

// classes allow us to create patterns that  describes objects.

// this is simple class example
class Player {
  taunt() {
    // this is method in classes
    console.log("Booyah!!");
  }
}

const player1 = new Player();
//player1.taunt(); // its will call methods of class

const player2 = new Player();
// player2.taunt();

//==========================
//        constructor
//==========================

// constructors are methods which automaticly gets call when we call class. we don't need to call these constructor  manually

class GamePlayer {
  taunt() {
    console.log("Booyah!!");
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // console.log("in Constructor ");
  }
}

const GamePlayer1 = new GamePlayer("Ashish", "nagar"); // it will automaticly call constructor of class

// console.log(GamePlayer1.lastName);
// console.log(GamePlayer1.firstName);

const GamePlayer2 = new GamePlayer("colt", "steel");

// console.log(GamePlayer2.firstName);
// console.log(GamePlayer2.lastName);

//==========================
//        class fields
//==========================

class NewGamePlayer {
  score = 0; // here      we can only use hardcode values
  numLives = 10;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //   this.score = 0;              // its better if we write it on top
    //   this.numLives = 10;
  }
  taunt() {
    console.log("inside taunt");
  }
  loseLife() {
    this.numLives -= 1;
  }
}
const newGamePlayer1 = new NewGamePlayer();
console.log(newGamePlayer1.numLives);
newGamePlayer1.loseLife();
console.log(newGamePlayer1.numLives);

//==========================
//      private fields
//==========================

//from above code
//write now i can make my score negative . but if its a game score then i would want that it should never be negative.
newGamePlayer1.score = -2423;

console.log(newGamePlayer1.score);

// to prevent it i have to make it private so that the property can not be change outside of that class
// i can do that by just writing # in front of property.
//if i add # in front of any property than that property can not be changed outside of class

class myGamePlayer {
  #score = 0;
  numLives = 10;
  loseLife() {
    this.numLives -= 1;
  }

  getScore() {
    return this.#score;
  }

  updateScroe(newScore) {
    this.#score = newScore;
  }

  // private methods are also posibile like this
  #secret() {
    console.log("secret ");
  }
}

const myGamePlayer1 = new myGamePlayer();

// now i can not access score outside of class

// to access it we can make new method getScore there
console.log(myGamePlayer1.getScore());

// to change value of score i can make different types of method inside the class and then i can access those methods outside class

myGamePlayer1.updateScroe(34);
console.log(myGamePlayer1.getScore());

//============================

//      Getters and  setters

//============================

//  this are like methods which are accessable as properties. we can make them by adding get key word in front of any method. then i can access them outside of class as a property

class myNewGamePlayer {
  #score = 0;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return this.first + " " + this.last;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("score must be positive");
    }
    this.#score = newScore;
  }
}

const myNewGamePlayer1 = new myNewGamePlayer("hello", "world");

console.log(myNewGamePlayer1.fullName); // we can access as property
myNewGamePlayer1.fullName = "honey singh";
console.log(myNewGamePlayer1.fullName); // we can access as property

// myNewGamePlayer1.score = 3234;
// console.log(myNewGamePlayer1.score);

//============================

//      static keyword

//============================

// we can use static key in front any method or property of class to tell javascipt that this method or property does not exist in  individual instances. but it belongs to class itself.

class starPlayer {
  description = "description is accesable in every instance of this class";
  static Newdescription =
    "new description is  not accesable in every instance of this class";
}

const newStarPlayer1 = new starPlayer();

console.log(newStarPlayer1.description); // it will print description
console.log(newStarPlayer1.Newdescription); // it will print undefined

//============================

//      Extending  classes

//============================

// by extenting class i can access on class property in another class(fron parent class to child class)

class parentClass {
  parent = "this is parent class";
}

class childClass extends parentClass {
  child = "this is child class";

  // this child will have access to properties and methods of parent class
}

// const newChildPlayer = new childClass();
// console.log(newChildPlayer.child);
// console.log(newChildPlayer.parent);

//============================

//      super keyword

//============================
