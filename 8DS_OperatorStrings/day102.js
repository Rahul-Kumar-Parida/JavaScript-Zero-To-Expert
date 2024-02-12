"use strict";

const restaurant = {
  name: "Rahul kumar parida",
  location: "Anji, Anantapur, soro ,Balasore",
  categories: ["Italian", "Southian", "Vegetarian", "organic"],
  StarterMenu: ["bread", "egg Omlet", "juice", "pampad", "fried rice"],
  MainMenu: ["Pizza", "Pesta", "Burgir"],
  openingHour: {
    thu: {
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
  order: function (StarterIndex, MainIndex) {
    return [this.StarterMenu[StarterIndex], this.MainMenu[MainIndex]];
  },

  orderDelivery: function({starterIndex =1, MainIndex =0, time='20:00', address}){
    console.log(`order recived ${this.StarterMenu[starterIndex]} and ${this.MainMenu[MainIndex]}  will be delivered to ${address} at ${time}`);
  }
};

//way-1
const { name, openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

// way-2
const {
  name: restaurantName,
  openingHour: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//way-3 (default values)
const { menu = [], StarterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables

let a = 11;
let b = 99;
const obj = { a: 12, b: 23, c: 45 };
({ a, b } = obj);
console.log(a, b); //12 23

// nested objects
const {
  fri: { open: o, close: c },
} = openingHour;
console.log(o, c); //11 24



//way 4

restaurant.orderDelivery({
    time: '10:30',
    address: "anji,balasore",
    MainIndex: 2,
    starterIndex: 2
});  //order recived juice and Burgir  will be delivered to anji,balasore at 10:30

//defalult value
restaurant.orderDelivery({
    address: "anji,balasore",
    starterIndex: 1,
})