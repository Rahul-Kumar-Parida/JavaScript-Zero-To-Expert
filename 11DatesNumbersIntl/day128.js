"use strict";
/*
//Internationalization Numbers(intl)
const num = 3884764.23;

const options = {
  style: "percent", //unit
  unit: "celsius",
  currency: "EUR",
};

console.log("us: ", new Intl.NumberFormat("en-US", options).format(num));

// us:  3,884,764.23 //normal
//us:  388,476,423% //percent celsius
//us:  3,884,764.23°C  //unit . celsius

// console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));

//Internationalization Dates and Time(intl)
const now = new Date();
const optionss = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric", //long used
  year: "numeric",
};

console.log(new Intl.DateTimeFormat(optionss).format(now));



//Timers: SetTimeOut and SetInterval


//SET TIME OUT😍
//1)...
setTimeout(() => console.log("Your  Order is: ..."));
console.log("waiting....");

//2)...
setTimeout(
  (ing1, ing2) => console.log(` Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  "olives",
  "spinach"
);


//3)...

const ingredients = ["olives", "spinacdh"];
const pizzatimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log("Waiting for more....");
if (ingredients.includes("spinach")) clearTimeout(pizzatimer);
*/


//SET INTERVAL😍.....,.
 
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
console.log("Date is:  ....");


