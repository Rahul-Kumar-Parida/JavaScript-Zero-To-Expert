"use strict";
/*
//😍ES6 Classes..........................................................
//Class Expression
// const PersonCl = class{}

//Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //method will be added to .prototype property
  clacAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(` Hey ${this.fullName}`);
  }
  get ageNum() {
    return 2024 - this.birthYear;
  }

  //set a property that already exits.
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullname;
  }

  //static method
  static hey() {
    console.log("hey there🍀");
    console.log(this);
  }
}

const rahul = new PersonCl("Rahul Kumar", 2002);
console.log(rahul);
rahul.clacAge(); //35

console.log(rahul.__proto__ === PersonCl.prototype); //ture

//this is manually created methos using .prototype

// PersonCl.prototype.greet = function () {
//   console.log(` Hey ${this.firstName}`);
// };

rahul.greet(); // Hey Rahul

//1)Classes are Not Hoisted
//2)Classes are first class citizen
//3)classes are executed in strict Mode

const waiter = new PersonCl("waiter white", 1990);

PersonCl.hey();

//😍 getters and setters..................................................
const account = {
  owner: "Jonas",
  movements: [200, 300, 120, 400],

  //getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //setter
  set latest(mov) {
    this.movements.push(mov);
  },
};

//get
console.log(account.latest); //400

//set
account.latest = 34;
console.log(account.movements);

//😍Static method............................................
// inside the class

*/
//😍 object.create ..............................................

const personProto = {
  clacAge() {
    console.log(2024 - this.birthYear);
  },

  init(fname, birthYear){
    this.fname = fname;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(personProto);

console.log(steven);

steven.name = "steeven";
steven.birthYear = 2003;
steven.clacAge(); //21

console.log(steven.__proto__ === personProto); //true

const sarah = Object.create(personProto);
sarah.init('sarah', 1979);
sarah.clacAge(); //45
