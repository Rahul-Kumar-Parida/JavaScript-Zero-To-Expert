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












//😍😍😍😍Prototype...........................................
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
Person.prototype.nameshow = function () {
  console.log(this.firstName, "Parida");
};
jonas.calcAge(); //38
rahul.calcAge(); //22
satish.calcAge(); //22
rahul.nameshow(); //Rahul Parida

console.log(jonas.__proto__);
console.log(Person.prototype);
//{ calcAge: [Function (anonymous)], nameshow: [Function (anonymous)] }

console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(rahul)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = "HOMO SAPIENS";
console.log(jonas, rahul);
console.log(jonas.species, rahul.species); //HOMO SAPIENS HOMO SAPIENS

console.log(jonas.hasOwnProperty("firstName")); //true
console.log(jonas.hasOwnProperty("species")); //false












//😍😍😍😍ProtoTypal Inheritance In built In Objects..................

console.log(jonas.__proto__);

//Object.prototype (top Of the Prototype Chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //null
console.dir(Person.prototype.constructor); //[Function: Person]

const arr = [3, 4, 6, 6, 7, 6, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
