"use strict";
/*
//SLICE METHODD..............
//not muatable original array..
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2)); //[ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); //[ 'c', 'd' ]
console.log(arr.slice(-1)); //[ 'e' ]
console.log(arr.slice(2, -2)); //[ 'c' ]
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]

console.log(arr.slice()); //[ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); //[ 'a', 'b', 'c', 'd', 'e' ]

//SPLICE METHOD.......
//its change original array
console.log(arr.splice(2)); //[ 'c', 'd', 'e' ]
console.log(arr); //[ 'a', 'b' ] //only a, b present
console.log(arr.splice(-1)); //[ 'b' ]
console.log(arr); // [ 'a' ] //onlu a present.

//REVERSE METHOD......
// it is mutable
let arry = ["a", "b", "c", "d", "e"];
let array = ['f','g','h','i','j','k']
console.log(arry.reverse()); //[ 'e', 'd', 'c', 'b', 'a' ]
console.log(arry); //[ 'e', 'd', 'c', 'b', 'a' ]

//CONCAT METHOD........
const letters = arry.concat(array);
console.log(letters); //[
//     'e', 'd', 'c', 'b',
//     'a', 'f', 'g', 'h',
//     'i', 'j', 'k'
//   ]


//we also use
console.log([...arry,...array]);
// [
//     'e', 'd', 'c', 'b',
//     'a', 'f', 'g', 'h',
//     'i', 'j', 'k'
//   ]

//JOIN METHOD.......
console.log(letters.join(' - '));
//e - d - c - b - a - f - g - h - i - j - k
console.log(letters);


//THE NEW METHOD...........
const arr1 = [23, 34, 56];
console.log(arr1[0]); //23
console.log(arr1.at(0)); //23

//last position element

console.log(arr1[arr1.length - 1]); //56

console.log(arr1.slice(-1)[0]); //56

console.log(arr1.at(-1)); //56

//strings

console.log("jonas".at(0));
console.log("jonas".at(-1));
*/

//LOOPING ARRAY :  FOR EACH................

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`Your Deposited Amount is Rs ${movement}`);
  } else {
    console.log(`Your Withdrawl Amount is Rs ${Math.abs(movement)}`);
  }
}
console.log("-------Entries---------");
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:Your Deposited Amount is Rs ${movement}`);
  } else {
    console.log(
      `Movement ${i + 1}: Your Withdrawl Amount is Rs ${Math.abs(movement)}`
    );
  }
}

console.log("-----------FOREACH---------");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`Your Deposited Amount is Rs ${movement}`);
  } else {
    console.log(`Your Withdrawl Amount is Rs ${Math.abs(movement)}`);
  }
});
console.log("-----------FOREACH- ENTRY--------");

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}:Your Deposited Amount is Rs ${mov}`);
  } else {
    console.log(
      `Movement ${i + 1}: Your Withdrawl Amount is Rs ${Math.abs(mov)}`
    );
    mov;
  }
});

//FOREACH WITH MAP AND SETS..............

console.log("-------------FOREACH WITH MAP");
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`Key is ${key} and value is ${value}`);
});

console.log("----------FOREACH WITH SETS--------");

const currenciesUnique = new Set(["USD", "USD", "GDP", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value}: ${key}`);
});
