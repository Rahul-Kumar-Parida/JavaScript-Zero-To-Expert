"use strict";
//sets....................................
const orderSet = new Set(["pizza", "pasta", "pasta", "ressoto", "burgir"]);
console.log(new Set("jonas"));
console.log(orderSet.size);
orderSet.add("veg pasta");
orderSet.delete("pasta");
console.log(orderSet.has("pizza"));
console.log(orderSet.has("juice"));
// orderSet.clear()
console.log(orderSet);

for (const food of orderSet) console.log(food);

//example

const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [new Set(staff)];
//change from set to array;
const staffUnique1 = [...new Set(staff)];
console.log(staffUnique1);

console.log(new Set(["size1", "size2"]).size);
console.log(new Set("jonas").size);

//Maps.........................................................

const rest = new Map();
rest.set("name", "Rahul kumar Parida");
rest.set(1, "address");
console.log(rest);

rest
  .set("categories", ["a1", "a2", "a3"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "i true")
  .set(false, "i false");
console.log(rest);

console.log(rest.get("name")); //rahul kumar parida
console.log(rest.get(true)); //i true
console.log(rest.get(1)); // address
console.log(rest.get("false")); //undefined

//trick
const time = 15;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//methods
console.log(rest.has("categories"));
rest.delete("categories");
console.log(rest);
console.log(rest.size);

//array

const arr = [1, 2, 4];
rest.set(arr, "test");
console.log(rest.get(arr));

//key
rest.set(document.querySelector("h1"), "heading");

console.log(rest);

//map iteration...................................

//example
const question = new Map([
  ["question", "What is the programming languages?"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);

console.log(question);

//convert  object to map
const openingHour = {
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
};
console.log(Object.entries(openingHour));
const hourMap = new Map(Object.entries(openingHour));
console.log(hourMap);

//quiz app;
console.log(question.get('question'));
for(const[key, value]of question){
  if(typeof key === 'number')console.log(`Answer ${key}: ${value}`);
}

const answer =3;
console.log(question.get(question.get("correct")=== answer));

//convert map to array;
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);