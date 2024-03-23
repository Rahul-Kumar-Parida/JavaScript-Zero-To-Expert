"use Strict";
//😍 THE EVENT LOOP IN PRACTICE....
/*
// console.log("TEST START");
// setTimeout(() => console.log("0 sec Timer"), 1110);
// Promise.resolve("resolved promise 1").then((res) => console.log(res));
// Promise.resolve("resolved promise 2").then((res) => {
//   for (let i = 0; i < 100000000; i++){} console.log(res);
// });
// console.log("TEST END");

//😍Building a Simple Promise......
console.log(Math.random());

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("Yow WIN ");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisifying setTimeout

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 1 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 3 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 4 second"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem")).catch((x) => console.error(x));

*/
// navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.error(err)
//   );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));
