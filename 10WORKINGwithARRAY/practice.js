"use strict";
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

/*VALUE
Key
Map(4) {
  'USD' => 'UNITED STATE DOLAAR',
  'EUR' => 'EURO',
  'RUPEE' => 'INDIAN RUPEES',
  'Key' => 'VALUE'
}*/

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