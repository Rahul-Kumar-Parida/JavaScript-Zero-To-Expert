"use strict";
//😍converting and checking numbers....................................................

console.log(23 === 23.0); //true
console.log(23 == "23"); //true
console.log(23 === "23"); //false

console.log(0.1 + 0.2); //0.300000000000000004
console.log(0.1 + 0.2 === 0.3); //flase

//Conversion....
console.log(Number("23")); //23 number
console.log("23"); //23 string
console.log(+"23"); //23 number

//Parsing......
console.log(Number.parseInt("233sff")); //233
console.log(Number.parseFloat("23.333sff")); //23.333
console.log(Number.parseInt("23.333sff")); //23
console.log(Number.parseInt("f233sff")); //NaN
console.log(parseInt("454.43sff")); //454

//Check if value is NaN...........

console.log(Number.isNaN(21)); //false
console.log(Number.isNaN("21")); //false
console.log(Number.isNaN(+"21o")); //true

// checking if value is number..........
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); //false
console.log(Number.isFinite(+"20o")); //false
console.log(Number.isFinite(23 / 0)); //false

//check integer...
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false

//😍MATH AND ROUNDING.......................................................................
//sqrt //*
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//max and min.......

console.log(Math.max(23, 34, 455, 667, 75, 33)); //667
console.log(Math.max(23, 34, 455, "667", 75, 33)); //667

console.log(Math.min(2234, 34, 23, 21, 4, 22)); //4

//PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);

//random Number generate
console.log(Math.trunc(Math.random() * 6) + 1); //0 to 6

//any range........

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 30));

//ROUNDING INTEGERS.......

console.log(Math.trunc(23.6)); //23 //integer part

//round
console.log(Math.round(24.3)); //24
console.log(Math.round(24.9)); //25

//ceil
console.log(Math.ceil(24.3)); //25
console.log(Math.ceil(24.9)); //25

//floor
console.log(Math.floor(23.2)); //23
console.log(Math.floor(23.9)); //23

//negetive
console.log(Math.trunc(-21.3)); //-21
console.log(Math.floor(-21.3)); //-22

//ROUNDING DECIMALS.......
console.log((2.4).toFixed(0)); //2  (STRING)
console.log((2.4).toFixed(4)); //2.4000 (STRING)
console.log((2.4432).toFixed(2)); //2.44 (STRING)
console.log(+(2.4432).toFixed(3)); //2.443  (NUMBER)

//😍REMAINDER OPERATOR.............................................................

console.log(5 % 2); //1
console.log(5 / 2); //2.5

const isEven = (n) => n % 2 === 0;
console.log(isEven(3)); //false
console.log(isEven(8)); //true

//NUMERIC SEPARATOR..............................................

const diameter = 243_232_444_000;
console.log(diameter); //243232444000
console.log(Number("234_432")); //NaN
console.log(parseInt("234_432")); //234
