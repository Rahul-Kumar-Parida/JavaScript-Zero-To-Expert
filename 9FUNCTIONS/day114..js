"use strict";
//😲BIND METHOD.......

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

console.log("........BIND METHOD.................");


//😲😲😲😲😲BIND METHOD..................................
const bookEw = book.bind(SatisAIR);
bookEw(23, "real sarkar");

const bookEW234 = book.bind(SatisAIR, 234);
bookEW234("Rahul kumar");
bookEW234("satya ranjan");
RahulAIR.planes = 300;
RahulAIR.buyplanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// RahulAIR.buyplanes();

document
  .querySelector(".body")
  .addEventListener("click", RahulAIR.buyplanes.bind(RahulAIR));

//partial application..........
//method -1
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//method- 2
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123
console.log(addVAT2(23)); //28.29
