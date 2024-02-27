"use strict";
//THE MAP METHOD.......
const IndianRupee = [
  233, 4443, 4998, 2490, 9857, 3467, 3666, 3478, 32, 456, 3489, 44,
];
const usd = 82.96;
//HIGHER ORDER FUNCTION......
// const IndiaToUsd = IndianRupee.map(function (mov) {
//   return ` $${mov / usd}`;
// });

//ARROW FUNCTION .....
const IndiaToUsd = IndianRupee.map((mov) => mov / usd);
console.log(IndianRupee);
console.log(IndiaToUsd);
const add = [];
for (const mov of IndianRupee) {
  add.push(` $${mov / usd}`);
}
console.log(add);

const user = "Rahul Kumar Parida";
const userLower = user
  .toLowerCase()
  .split(" ")
  .map(function (log) {
    return log[0];
  })
  .join("");
console.log(userLower); //rkp

//THE FILTER METHODS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposites = movements.filter((mov) => mov > 0);
console.log(deposites);

const depo = [];
for (const move of movements) {
  if (move > 0) {
    depo.push(move);
  }
}
console.log(depo);

const withdrawl = movements.filter((pass) => pass < 0);
console.log(withdrawl);

//THE REDUCE METHOD.......
//ACCUMULATOR IS LIKE SNOWBALL........

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);
let bal = 0;
for (const add of movements) bal += add;
console.log(bal);

//maximum value....
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
