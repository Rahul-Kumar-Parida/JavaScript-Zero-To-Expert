"use strict";

// const num = 23;
// console.log(num);
// console.log();
// console.log("sbdjksj");

// Using Google, StackOverFlow and MDN

// Problem 1:
// We work for a company building a smart thermometer. our most recent task is this: "Given an array of temperature of one day, claculate the temperature amplitude". Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// -How to compute max and min temperature?
// -and what to do?

// 2) Breaking up into sub-problems
// -How to ignore errors?
// -Find max value in temp Array
// -Find min value in temp Array
// -Substract min from max(amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
