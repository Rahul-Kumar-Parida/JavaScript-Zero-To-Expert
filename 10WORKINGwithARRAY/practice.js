"use strict";
// slice method
const sle = [3, 44, 45, 6, 66, 7, 8, 87];
console.log(sle.slice(2, 6)); //[ 45, 6, 66, 7 ]
console.log(sle); // [ 3,44,45,6,66,7,8,87]
// console.log(sle.splice(2,7));//[ 45, 6, 66, 7, 8, 87 ]
// console.log(sle);  //[ 3, 44 ]

console.log(sle.reverse()); //[ 87,  8,  7, 66,6, 45, 44,  3]

//the new method .............................
//access first element....
const arr = [23, 34, 56, 77, 89, 98, 76, 44, 32];
console.log(arr.at(0)); //23
console.log(arr[0]); //23
//access last element....
console.log(arr[arr.length - 1]); //32
console.log(arr.slice(-1)[0]); //32
console.log(arr.at(-1)); //32

//foreach method
const movements = [233, 444, 554, 533, 287, 232, 333, 232];
movements.forEach(function (move) {
  if (move > 400) {
    console.log(`${move} :😲 High Price`);
  } else {
    console.log(`${move} :😍 Low Price`);
  }
});

//foreach with map
const fmap = new Map([
  ["USD", "AMERICA"],
  ["RUPEE", "INDIA"],
  ["EURO", "EUPROPE"],
]);
fmap.forEach(function(value,key,map){
    console.log(`${key} : ${value}`);
})
