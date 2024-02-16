"use strict";
//A closer look at functions
//1) 🤔DEFAULT PARAMETERS,........................................................
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 198 * numPassenger
) {
  //es5...Way
  // numPassenger = numPassenger || 1;
  // price = price|| 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH23");
createBooking("LH243", 3, 234);
createBooking("LH23", 4);
createBooking("LH23", 2);
createBooking("LH456", undefined, 233);
//{flightNum: 'LH23', numPassenger: 1, price: 198}
// day112.js:15 {flightNum: 'LH243', numPassenger: 3, price: 234}
// day112.js:15 {flightNum: 'LH23', numPassenger: 4, price: 792}
// day112.js:15 {flightNum: 'LH23', numPassenger: 2, price: 396}
// 'LH456', numPassenger: 1, price: 233}

// 2)🤔 How Passing arguments works: Value vs. reference,.........................................

const flight = "LH2343";
const rahul = {
  name: "Rahul Parida",
  passport: 23240025,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Lh231";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 23240025) {
    console.log("You are verified!!!");
  } else {
    console.log("You are not verified!!!");
  }
};

checkIn(flight, rahul);
console.log(flight);
console.log(rahul);
//You are verified!!!
// day112.js:53 LH2343
// day112.js:54 {name: 'Mr.Rahul Parida', passport: 23240025}

//is the same as doing.......
const flightNum = flight;
const passenger = rahul;
console.log(flightNum, passenger);
// LH2343 {name: 'Mr.Rahul Parida', passport: 23240025}

//new..method
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(rahul);
checkIn(flight, rahul); //You are not verified!!!

//😲: Javascript does not have passing by refference only passing by value.


//3)🤔 FIRST_CLASS AND HIGHER ORDER FUNCTIONS:...................................

//First class function vs. higher order functions  definition , write down in the note book,..



