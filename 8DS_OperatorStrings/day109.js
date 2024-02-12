"use strict";
const weekdays = ["sun", "mon", "tues", "wed", "thrus", "fri", "sat"];
const restaurant = {
  name: "Rahul kumar parida",
  location: "Anji, Anantapur, soro ,Balasore",
  categories: ["Italian", "Southian", "Vegetarian", "organic"],
  StarterMenu: ["bread", "egg Omlet", "juice", "pampad", "fried rice"],
  MainMenu: ["Pizza", "Pesta", "Burgir"],
  openingHour: {
    thrus: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
  weekdays,
  order: function (StarterIndex, MainIndex) {
    return [this.StarterMenu[StarterIndex], this.MainMenu[MainIndex]];
  },
};

//lopping array:the for-of loop
const menu = [...restaurant.StarterMenu, ...restaurant.MainMenu];
for (const item of menu) console.log(item);

//destructring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//objects literals
// weekdays Array included when
console.log(restaurant);
// optional chaining.............................

if (restaurant.openingHour && restaurant.openingHour.mon)
  console.log(restaurant.openingHour.mon.open);

//?.
console.log(restaurant.openingHour.mon?.open); //undefined
// console.log(restaurant.openingHour.mon.open); //error

//example
const days = ["sun", "mon", "tues", "wed", "thrus", "fri", "sat"];
for (const day of days) {
  const open = restaurant.openingHour[day]?.open ?? 0;
  console.log(`On ${day}, We open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderressoto?.(0, 1) ?? "method does not exist");

//arrays

const users = [{ name: "jonas", email: "hellojonas" }];
console.log(users[0]?.name) ?? "user array empty";

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
console.log(users[0]?.email);

//Lopping objects:objects keys , values and entries
const openingHour = {
  thrus: {
    open: 10,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 12,
    close: 24,
  },
};
//1) objects keys(property name)
const properties = Object.keys(openingHour);
console.log(properties);

let openStr = ` we are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//2) property values
const values = Object.values(openingHour);
console.log(values);

//3)object entries
const entries = Object.entries(openingHour);
console.log(entries);


//[key , value]
for(const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}