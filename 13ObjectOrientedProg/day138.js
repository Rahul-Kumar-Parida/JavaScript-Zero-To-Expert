"use strict";
//What is object oriented programming
//OOp in JaVaScript

//🍀Constructor Functions And THe New Operator
//Steps are....
//1) New{} is created
//2) function is called, this = {}
//3) {} linked to prototype
//4) function automatically return {}

const Person = function (firstName, birthYear) {
  //Instance properties...
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create a method inside the constructor
//   this.calcAge = function () {
//     console.log(2034 - this.birthYear);
//   };
};

const jonas = new Person("jonas", 1996);
console.log(jonas);
//Person { firstName: 'jonas', birthYear: 1996 }
const rahul = new Person("Rahul", 2002);
console.log(rahul);
const satish = new Person("Satish", 2002);
console.log(satish);

// check instance
console.log(jonas instanceof Person); //true
