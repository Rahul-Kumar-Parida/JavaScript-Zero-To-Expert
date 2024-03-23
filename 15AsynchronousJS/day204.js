"use strict";
//😍😍 Consuming promises with async and await...
/*
const whereAmi = async function (country) {
  //same-1
  //   fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) =>
  //     console.log(res)
  //   );

  //same-2
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // console.log(res);
  const data = await res.json();
  console.log(data);
};

whereAmi("portugal");
console.log("FIRST");

//😍😍 ERROR HANDLING WITH TRY CATCH

// let y= 4;
// const x= 2;
// x=4;
//TypeError: Assignment to constant variable.

// now using try catch

try {
  let y = 4;
  const x = 2;
  x = 4;
} catch (err) {
  console.error(err.message);
  console.log("SOMETHING MISTAKE");
}

//😍😍  Returning values from async functions

//Running Promises in parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
};

get3Countries("portugal", "canada", "inida");
*/

//Other Promise Combinators: race, allSettled and any..
