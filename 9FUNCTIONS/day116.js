"use strict";
//Basic Functions in javascript,,,,,,,,,,

//activating strict mode,.....
let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("can Drive");

//strict modes makes...................................
// strict mode makes it easier for us developers to avoid accidental errors (introduce bugs into our code )

// function in javascript.............................
// javascript function is set of instructions that takes input do some computations and gives output, a function is execute when something invokes it

//example of function

function logger() {
  console.log("I am rahul");
}
logger();

function add(a, b) {
  return a + b;
}
const adding = add(4, 5);
console.log(adding);

function check(para) {
  if (para === "Hyy" || para === "Hi" || para === "Hello" || para === "hii") {
    console.log("How Can I Help You");
  } else {
    console.log("How can I help you");
  }
}
check("hiii");

//There are 3 types of function
//function declaration

function calcAge(age) {
  console.log(`Your age is ${2024 - age}`);
}
calcAge(2002);

//function expression
const point = function (pointNum) {
  console.log(pointNum / 100);
};
point(23);

//Arrow function...
const plus = (birthyear) => "hello";
console.log(plus());

const functionName = (parameters) => "I am logged";
console.log(functionName());

//function call another function
function cutting(things) {
  return things * 4;
}
function juice(apple, oranges) {
  const apple1 = cutting(apple);
  const orange1 = cutting(oranges);
  const juice = `apple cuts into ${apple1} parts and oranges cuts into ${orange1} parts`;
  return juice;
}

console.log(juice(5, 6));
