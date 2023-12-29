"use strict";
let age = 10;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);


const me = {
    name:"jonas",
    age: 30,
}
console.log("me:", me);
const friend = me;
friend.age = 27;
console.log("friend:", friend);
console.log("me:", me);


//primitive and obejects in practice

//primitives
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);


//reference types
const jessica ={
    firstName: "jessica",
    lastName : "Williams",
    age: 38,
}

const marriedJessica = jessica;
marriedJessica.lastName = "davis";
console.log(jessica, marriedJessica);


// copying Objects

const jessica2 ={
    fname: "jessica",
    lname: "Williams",
    age: 23,
    family: ["Allice", "Dino"]
}

const jessica2copy = Object.assign({}, jessica2);
jessica2copy.fname = "Davis";

jessica2copy.family.push("Mary");
jessica2copy.family.push("Sili");

console.log("before:", jessica2);
console.log("after:", jessica2copy);