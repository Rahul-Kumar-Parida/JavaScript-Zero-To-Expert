"use strict";
const oneword = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const uppwerFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher order Function......(a function is call inside the function)
//1).....................
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer("Rahul Is A Good Boy", uppwerFirstWord);
transformer("Rahul Is A Good Boy", oneword);

//2)JS Uses callback all the time..
const high5 = function () {
  console.log("👋");
};
document.querySelector(".body").addEventListener("click", high5);

//Function returning functions....

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// m-1..
const greetHey = greet("Hey");
greetHey("Jonas1");
greetHey("Steven1");
//m-2...
greet("Hello")("rahul1");

//function return using arrow function...
const arrgreet = (greete) => (arrname) => console.log(`${greete} ${arrname}`);
//m-3...
const greetHeyy = arrgreet("Hey");
greetHeyy("Jonas");
greetHeyy("Steven");
//m-4...
arrgreet("Hello")("rahul");

//THe CAll AND APPLY METHODS.......

const RahulAIR = {
  airline: "BPAIRLINE",
  iataCode: "LH",
  bookings: [],
  //book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode} ${flightNum}`, name });
  },
};

RahulAIR.book(234, "real secret");
console.log(RahulAIR);

//call method.........)...
//call-1..............}
const RealAir = {
  name: "Sahil",
  airline: "bjp",
  iataCode: "EW",
  bookings: [],
};

const book = RahulAIR.book;
//Does Not Work.
// book(23, "Himanshu");

book.call(RealAir, 23, "Satya");
console.log(RealAir);

book.call(RahulAIR, 234, "satish");
console.log(RahulAIR);

//call-2.................}
const SatisAIR = {
  name: "Satish kumar",
  airline: "denkhnal",
  iataCode: "EWS",
  bookings: [],
};

book.call(SatisAIR, 234, "Hinam");

//Apply method>>>>>>>>>>>>>>

const flightdata = [2355, "dinesh kumar"];
//apply
book.apply(SatisAIR, flightdata);
console.log(SatisAIR);
//call for same as apply...
book.call(SatisAIR, ...flightdata);


/*
//OUTPUT😲

Original string: Rahul Is A Good Boy
day113.js:15 Transformed String: RAHUL Is A Good Boy
day113.js:16 Transformed By: uppwerFirstWord
day113.js:14 Original string: Rahul Is A Good Boy
day113.js:15 Transformed String: rahulisagoodboy
day113.js:16 Transformed By: oneword
day113.js:32 Hey Jonas1
day113.js:32 Hey Steven1
day113.js:32 Hello rahul1
day113.js:44 Hey Jonas
day113.js:44 Hey Steven
day113.js:44 Hello rahul
day113.js:60 real secret booked a seat on BPAIRLINE flight LH 234
day113.js:68 {airline: 'BPAIRLINE', iataCode: 'LH', bookings: Array(1), book: ƒ}
day113.js:60 Satya booked a seat on bjp flight EW 23
day113.js:84 {name: 'Sahil', airline: 'bjp', iataCode: 'EW', bookings: Array(1)}
day113.js:60 satish booked a seat on BPAIRLINE flight LH 234
day113.js:87 {airline: 'BPAIRLINE', iataCode: 'LH', bookings: Array(2), book: ƒ}
day113.js:60 Hinam booked a seat on denkhnal flight EWS 234
day113.js:60 dinesh kumar booked a seat on denkhnal flight EWS 2355
day113.js:104 {name: 'Satish kumar', airline: 'denkhnal', iataCode: 'EWS', bookings: Array(2)}
day113.js:60 dinesh kumar booked a seat on denkhnal flight EWS 2355
*/
