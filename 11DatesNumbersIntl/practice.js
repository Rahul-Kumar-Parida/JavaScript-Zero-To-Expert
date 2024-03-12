"use strict";

//Converting and checking Numbers;

//conversion..
console.log(Number("23")); //num 23
console.log(String(23)); //str 23
console.log(+"23"); //Num 23

//parsing
//parseInt   and parseFloat
console.log(Number.parseInt("234gg")); //return only 234
console.log(Number.parseInt("gg")); //NaN
console.log(Number.parseFloat("23399kk")); //23399
console.log(Number.parseFloat("233.99kk")); //233.99

//checking if value is NaN
console.log(isNaN(23)); //false
console.log(isNaN("34g")); //true

//checking if value is Number or  finite
console.log(Number.isFinite(2344)); //true
console.log(Number.isFinite("20")); //flase
console.log(Number.isFinite(1 / 0)); //false

console.log(Number.isInteger(9)); //true

//Math and Round

//random num generator
console.log(Math.trunc(Math.random() * 6 + 1) + 2); //trunc used for remove float part

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 30));
//range find......
const randoInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randoInt(10, 30));

//Rounding Integer
console.log(Math.trunc(23.8));

//round
console.log(Math.round(24.3)); //24
console.log(Math.round(24.9)); //25

//ceil
console.log(Math.ceil(24.3)); //25
console.log(Math.ceil(24.9)); //25

//floor
console.log(Math.floor(23.4)); //23
console.log(Math.floor(23.9)); //23

//negetive floor
console.log(Math.floor(-23.4)); //24
console.log(Math.floor(-23.9)); //24

//Rounding decimal
console.log((2.4).toFixed(0)); //2
console.log((2.4).toFixed(5)); //2.40000
console.log(+(2.4432).toFixed(3)); //2.443


//remainder operator
const isEven = (n) => n%2 ===0;
console.log(isEven(3));  //false
console.log(isEven(8));  //true

//Numeric separator
const diamete = 3443_22323_455;
console.log(diamete); //344322323455

console.log(Number('3443_3434')); //NaN 
console.log(Number.parseInt('3443_3434')); //3443 
//this is called numeric separator....