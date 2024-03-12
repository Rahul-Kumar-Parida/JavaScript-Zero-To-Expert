"use strict";
//😍😍Inheritance Between Classes and Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// student.prototype = Object.create(Person.prototype);

student.prototype = Person.prototype;

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I a study ${this.course}`);
};

const mike = new student("mike", 2020, "computer Science");
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

student.prototype.constructor = student;
console.dir(student.prototype.constructor);
