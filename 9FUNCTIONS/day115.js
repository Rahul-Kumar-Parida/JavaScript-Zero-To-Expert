"use strict";

//😍Immediately invoked Function expression(IIFE)......

const afunction = function () {
  console.log("I am a function expression !!");
};
afunction();

//IIFE-1...
(function () {
  console.log("I am a immediately invoked function expressions");
})();

//IIFE-2...
(() => console.log("I am ALSO IIFE"))();

//Scope...........

{
  let execute1 = 34;
  var execute2 = 56;
  const execute3 = 34;
}
// console.log(execute1);
// console.log(execute3);
console.log(execute2); //only execute when variable assign a block scope

//😍Closures in functions........
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

//Examples of closures
// Ex-1...

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const a = 33;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);
//Re-assigning f function....
h();
f();
console.dir(f);

//😲😲😲😲Ex-2...
const boardPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${preGroup} passengers`);
  },
  wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
// const preGroup =1000;
boardPassengers(180, 3);


