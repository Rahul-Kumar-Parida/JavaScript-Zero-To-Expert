"use strict";
/*
//😍😍Working BIgint....

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

//bigint uses
console.log(879958958989949534050904590495); //8.799589589899495e+29
console.log(35867585478549878785278347877538587873n);
//35867585478549878785278347877538587873n

console.log(BigInt(853843958984959349583948958349853485734579883484));
//853843958984959323196319665404830207396689215488n

//ex-1
const huge = 458493843945886943990239n;
const num = 23;
console.log(huge * BigInt(num));

//exception...
console.log(34n > 12); //true
console.log(34n === 34); //false
console.log(typeof 20n); //bigint
console.log(23n == 23); //true

console.log(huge + "is really big");

//Divisions

console.log(10n / 3n); //3n

console.log(10 / 3); //3.3333333333333335

//😍😍..WORKING WITH DATES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//create a date.....

const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2002  18:08:41"));
console.log(new Date("December 24, 2003"));

console.log(new Date(2012, 10, 19, 15, 23, 7)); //2012-11-19T09:53:07.000Z

console.log(new Date(0)); //1970-01-01T00:00:00.000Z
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //1970-01-04T00:00:00.000Z


//current date......

const currentDate = new Date();
console.log(currentDate); //2024-02-27T04:55:03.424Z
console.log(currentDate.getFullYear()); //2024
console.log(currentDate.getMonth()); //1
console.log(currentDate.getDate()); //27
console.log(currentDate.getDay()); //2 (tuesday)
// console.log(currentDate.getTime());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.toISOString()); //2024-02-27T04:58:33.064Z

console.log(currentDate.getTime());
console.log(new Date(1709009978164));
//2024-02-27T04:59:38.164Z
*/
// 😍😍..Operation with Dates......
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); //2142237180000 in milisecond

const calcDayPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days); //10

//InterNationalizing Dates (INTL)


// labelDate.textContent = new Intl.DateTimeFormat(
//   currentAccount.locale,
//   options
// ).format(now);