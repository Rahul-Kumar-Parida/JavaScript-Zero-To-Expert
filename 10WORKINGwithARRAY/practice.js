"use strict";

/*
//Working with Arrays
//Slice method

const arr = [3, 4, 5, 6, 7, 8, 8];
console.log(arr.slice(2, 5)); //[ 5, 6, 7 ]
console.log(arr); //[3,4,5,6,7,8,8] //not mutable

// //splice method
// console.log(arr.splice(2)); //delete [ 5, 6, 7, 8, 8 ]
// console.log(arr); //[ 3, 4 ] //mutable

// //reverse method....
// console.log(arr.reverse()); //[8, 8, 7, 6, 5, 4, 3]
// console.log(arr); //[8, 8, 7, 6, 5, 4, 3]  //mutable

//concate method..
const arr2 = [52, 53, 44, 45, 36, 23, 12, 16];
// console.log(...arr, ...arr2); //3 4 5 6 7 8 8 52 53 44 45 36 23 12 16
// console.log([...arr, ...arr2]); //[3 4 5 6 7 8 8 52 53 44 45 36 23 12 16]
console.log(arr.concat(arr2)); ////[3 4 5 6 7 8 8 52 53 44 45 36 23 12 16]

//join method...
console.log(arr.join(" % ")); //3 % 4 % 5 % 6 % 7 % 8 % 8
console.log(arr.concat(arr2).join(" --- "));
//3 --- 4 --- 5 --- 6 --- 7 --- 8 --- 8 --- 52 --- 53 --- 44 --- 45 --- 36 --- 23 --- 12 --- 16

//THE NEW METHOD......
const arr3 = [23, 34, 45, 56];
//(First element access)
console.log(arr3[0]); //23
console.log(arr3.at(0)); //23

//(last element access)
console.log(arr3.at(3)); //56
console.log(arr3[arr3.length - 1]); //56
console.log(arr3.at(-1)); //56
console.log(arr3.slice(-1)[0]); //56

//Looping Array : For Each...
const movement = [200, 300, 400, -222, -333, -444, 900, -440];
movement.forEach(function (mov, index, arr) {
  console.log(mov);
  console.log(index);
  console.log(arr);
});

//ForEach With Map and Set
const currency = new Map([
  ["USD", "UNITED STATE DOLAAR"],
  ["EUR", "EURO"],
  ["RUPEE", "INDIAN RUPEES"],
  ["Key", "VALUE"],
]);
currency.forEach(function (value, key, map) {
  console.log(value);
  console.log(key);
  console.log(map);
});
*/
/*VALUE
Key
Map(4) {
  'USD' => 'UNITED STATE DOLAAR',
  'EUR' => 'EURO',
  'RUPEE' => 'INDIAN RUPEES',
  'Key' => 'VALUE'
}*/

/*
//THE MAP METHOD

const dil = [4, 5, 2, 3, 1, 6, 7, 8, 9];
const operation = dil.map(function (mov) {
  return mov ** 2;
});
console.log(operation); //[16, 25,  4,  9, 1, 36, 49, 64, 81] //Square

//THE FILTER METHOD
const operation1 = dil.filter(function (mob) {
  return mob > 3;
});
console.log(operation1); //[ 4, 5, 6, 7, 8, 9 ]  //greaterthan

//THE REDUCE METHOD

const operation2 = dil.reduce(function (acc, cur, i, arr) {
  console.log(`NUMBER ${i} : ${acc}`);
  return acc + cur;
}, 0);
console.log(operation2);

//THE MAGIC OF CHAINING METHOD
const a = [12, 23, 34, 45, 56, 24, 25];
const total = a
  .filter((mov) => mov > 30)
  .map((mov) => mov + 1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(total); //138

//THE FIND METHOD

const wdw1 = a.find((mov) => mov > 130);
console.log(wdw1); //undefined
const wdw2 = a.find((mov) => mov > 30);
console.log(wdw2); //34
//it returns first element if condition is true...

//Implementing LogIn
//Implementation Transfer
//The Find index method
*/

//SOME AND EVERY METHOD

const move = [34, 556, 67, 124, -243, 3445, -666];
console.log(move.includes(67)); //true

//some
//if one condition is satisfied then it returns true

console.log(move.some((run) => run > 0)); //ture
console.log(move.some((run) => run < 0)); //true

//every
const move1 = [34, 556, 67, 124, 243, 3445, -666];
console.log(move1.every((run) => run > 0)); //false  //bucz one element is -ve

//FLAT AND FLATMAP METHOD

const ft = [34, 45, 56, [78, 98, 32], 44, [33, 55], 23];
console.log(ft.flat()); //[34, 45, 56, 78, 98, 32, 44, 33, 55, 23]

//Sort array

const st = [3, 4, 6, 2, 77, 42, 327, 55];
console.log(st.sort()); //first index sort  //[2,  3, 327,  4,42, 55,   6, 77]

//ascending
st.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(st); //[2,  3,  4,   6,42, 55, 77, 327]

//descending
st.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(st); //[ 327, 77, 55, 42, 6,  4,  3,  2]

//more ways creating array

const x = new Array(7);
console.log(x); //[ <7 empty items> ]

x.fill(3, 1, 5);
console.log(x); //[ <1 empty item>, 3, 3, 3, 3, <2 empty items> ]
//3 fill from 1 to 5
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1,1,1,1,1,1,1]


