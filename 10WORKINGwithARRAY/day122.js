"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const totalDepositesUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov + euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositesUSD);

//THE FIND METHOD............................
//Find Method does not return an Array..............
//It will return first element if condition is true;

const firstWithdral = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdral);  //-400
