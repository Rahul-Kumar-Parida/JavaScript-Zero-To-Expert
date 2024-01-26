"use strict";
//topic is variable environment :Hoisting and The TDZ

//global variables
// console.log(me);   //undefined
// console.log(fname); //error
// console.log(year);   //error
var me = "rahul";
let fname = "satish";
const year = 1991;

//for functions

console.log(addDeclaration(4, 3)); //7
// console.log(addExpression(4,3)); //error
// console.log(addArrow(4,3)); //error

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

let addArrow = (a, b) => a + b;

//hoisting exmple

if (!numProducts) deleteShopingCart();
var numProducts = 10;
function deleteShopingCart() {
  console.log("All product Deleted");
}

//global window object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//this keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

//object
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037-this.year);
  },
};
jonas.calcAge();

//method borrowing

const rahul = {
  year: 2017
}

rahul.calcAge = jonas.calcAge;
rahul.calcAge();