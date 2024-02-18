"use strict";
//Array in Javascript...

/*
//1)😍What is array....
// Javascript array is a single variable that is used to store multiple elements in different datatypes.

//2)😍Declaration of array ....
//There are two ways to declare an array
//a}create a array using array literal.
const MyArray = [1, 2, 3, 4, "hello", "Rahul", 7.9, true]; //different datatypes
console.log(MyArray); //[ 1, 2, 3, 4, 'hello', 'Rahul', 7.9, true ]

//b} using new keyword.

const newArray = new Array(23, 34, "new array", "using", "new keyword");
console.log(newArray); //[ 23, 34, 'new array', 'using', 'new keyword' ]

//3)😍Accessing Element of an array..
console.log(newArray[0]); //23
console.log(newArray[1]); //24
console.log(newArray[2]); //new array
console.log(newArray[3]); //using

//4)😍Change element of a pre defined array....
newArray[3] = "i am changed";
console.log(newArray); //[ 23, 34, 'new array', 'i am changed', 'new keyword' ]

//length of an array
console.log(newArray.length); //5

//convert array to string,,,
console.log(newArray.toString()); //23,34,new array,i am changed,new keyword

//5)😍Function of an array.....

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const age = [2002, 2001, 2003, 2005, 1999];
console.log(calcAge(age)); //NaN
const arrayAge = [
  calcAge(age[0]),
  calcAge(age[1]),
  calcAge(age[2]),
  calcAge(age[3]),
];
console.log(arrayAge); //[ 22, 23, 21, 19 ]

//6)😍Basics methods in ARRAY.......
//a).push() // add element in the last
const ArrayMethod = [23, 34, 35, 56, 67, 89, 23];
console.log(ArrayMethod.length);
console.log(ArrayMethod.push(988));

//b).unshift()  //add element in the beginning
ArrayMethod.unshift("first");

//c) .pop()  //remove last element
ArrayMethod.pop();

//d) .shift() //remove first element
ArrayMethod.shift();
 

//e)indexof  //check index
console.log(ArrayMethod.indexOf(23)); //0  //if not present return -1


//f)includes() 
console.log(ArrayMethod.includes(67));   //true  //if not present it return false

//7)😍 Looping array...
const loopArray = [23, 34, 21, 54, 42, 31];

for(let i =0 ; i< loopArray.length;i++){
    console.log(loopArray[i] );
}//23 34  21 54 42 31
 
*/

/*
//Object in Javacsript....
//1)😍What is Objects,,,,
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

//syntax
const AnObject = {
  name: "rahul kumar parida",
  regdNo: 23240025,
  subjects: ["wdt", "coa", "mme", "rm", "ict"],
};
console.log(AnObject);
console.log(AnObject.regdNo);

//2)😍Dot vs Bracket Notations
console.log(AnObject.name); //rahul kumar parida
console.log(AnObject["regdNo"]); //23240025

//3)😍how we use bracket and dot notations

AnObject.name = "Satish K videos";
// console.log(AnObject);  //chnaged name in objects

AnObject["regdNo"] = 23240029;
console.log(AnObject);

//4)😍Objects methods...
const rahul = {
  at: "Anji",
  TenthMark: [86, 95, 75, 45, 55, 85],
  PlusTwoMark: [75, 65, 55, 45, 75, 68],
  exFriends: ["dillip", "Sangram", "Prabir", "subrat", "prakash", "jayanta"],
  newFriends: ["chandan", "sunil", "satyabrata", "satish", "himanshu"],
  getMethod: function () {
    for (let i = 0; i < this.newFriends.length; i++) {
      if (this.newFriends[i] === "sunil") {
        console.log("Yes sunil is your new friend");
      }
    }
  },
};

rahul.getMethod();
*/

/*
//1)😍Destructuring Array.......
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); //2 3 4

const [x, y, z] = arr;
console.log(x, y, z); //2 3 4

const restaurant = {
  name: "Rahul Kumar Parida",
  location: "Anji, Anantapur, Soro, Balasore",
  categories: ["Southian", "Italian", "Vegiterian", "Organic"],
  starterMenu: ["bread", "egg Omlet", "juice", "pamapad", "friedRice"],
  mainMenu: ["Rice", "Dal", "Chicken Curry", "Pizza", "Pasta", "Burgir"],
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
};
let [first, second] = restaurant.categories;
console.log(first, second); //Southian Italian

//swap
[first, second] = [second, first];
console.log(first, second); //Italian Southian

const [starter, main] = restaurant.order(3, 4);
console.log(starter, main); //pamapad Pasta

//Nested Destructuring
const nested = [2, 3, 4, [5, 6, [7, 9]]];
const [, , , [, , [k, l]]] = nested;
console.log(k, l); //7 9

//default Values....
const [p, w, r, s, t = 9] = [3, 4, 5, 6];
console.log(p, w, r, s, t); //3 4 5 6 9

//2)😍Destructuring Objects........

const restaurantShop = {
  namee: "Rahul Kumar Parida",
  location: "Anji, Anantapur, Soro, Balasore",
  categories: ["Southian", "Italian", "Vegiterian", "Organic"],
  starterMenu: ["bread", "egg Omlet", "juice", "pamapad", "friedRice"],
  mainMenu: ["Rice", "Dal", "Chicken Curry", "Pizza", "Pasta", "Burgir"],
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  delivery: function ({ starterindex }) {
    console.log(
      `${this.namee} ordered ${this.starterMenu[starterindex]} of deleviry address ${this.location}`
    );
  },
  tip: {
    man1: 10,
    man2: 11,
    man3: 12,
  },
};
//way-1
// let { namee, location, categories } = restaurantShop;

// console.log(namee, location, categories);
//way-2
let { namee: myName, location: mylocation } = restaurantShop;
console.log(myName, mylocation);

//way-3
const { menu = [], starterMenu: starters = [] } = restaurantShop;
console.log(menu, starters);

//Mutating variables........
let str = 12;
let str1 = 15;
const obj = { str: 111, str1: 234 };
// console.log(obj); //{ str: 111, str1: 234 }

({ str, str1 } = obj);
console.log(str, str1); //111 234

//nested objects
const {
  namee,
  tip: { man1, man2 },
} = restaurantShop;
console.log(namee, man1, man2); //Rahul Kumar Parida 10 11

restaurantShop.delivery({ starterindex: 1 }); //Rahul Kumar Parida ordered egg Omlet of deleviry address Anji, Anantapur, Soro, Balasore


//3)😍rest operator....
//i want to just sum of multiple numbers
function sum(...all) {
  let sum = 0;
  for (const i of all) {
    sum = sum + i;
  }
  console.log(sum);
}

sum(345, 343); //688

//4)😍spread operator...

//replace apply() method

let arrValue = [5, 6, 4, 3];
sum(...arrValue); //18
sum.apply(null, arrValue); //18

//concate 2 array
let arr1 = [3, 4, 5, 7, 6];
let arr2 = [66, 77, 44, 22, 55];
console.log(...arr1, ...arr2); //3 4 5 7 6 66 77 44 22 55

const concateTwo = [...arr1, ...arr2];
console.log(concateTwo);

const newcon = [...concateTwo, ...arrValue];
// console.log(concateTwo);
console.log(newcon); //copy

//5)😍Short Circuiting ......
//use any datatype return any datatype
//OR (||)
//AND (&&)
console.log(3 || "jonas"); //3
console.log(3 && "jonas"); //jonas
console.log(null && undefined); //null
console.log(null || undefined); //undefined
console.log(3 && "jonas"); //jonas

//6)😍The nullish operator....
console.log(null ?? 10); //10
console.log(undefined ?? 10); //10
console.log("jonas" ?? "23" ?? 43 ?? null); //jonas
console.log(23 ?? "jonas"); //23

//7)😍Logical assignment operator.
//or assignment operator..
const rest1 = {
  name: "real",
  numguest: 34,
};
rest1.numguest ||= 10;
console.log(rest1);
//and assignment operator..
rest1.numguest &&= 10;
console.log(rest1);

//8)😍looping array....
//i want log all the element of an array .........
const menuu = ["Satish", "Rahul", "Himanshu", "sunil", "dillip", "sangram"];
for (const item of menuu) console.log(item);
for (const item of menuu.entries()) console.log(item);

//9)😍Enhanced Object Literal.............
const openingHour = {
  n: "Rahul",
  h: "anji",
  r: "rank 17",
};

// const openingHour2 = {
//   n1: "Real",
//   n2: "Jayanagar",
//   n3: "Ramk 18",
//   openingHour,
// };
// // console.log(openingHour2);

//10)😍optional chainning

// console.log(openingHour2.openingHour.n); //Rahul
// if (openingHour2.real === undefined) console.log("yes ");

//11)😍Looping Objects.............
// //object.keys
// console.log(Object.keys(openingHour2));

// //object.values
// console.log(Object.values(openingHour2));

// //object.entries
// console.log(Object.entries(openingHour2));

//12)😍Sets in javascript.....
const setsMethod = new Set([
  "pizza",
  "pizza",
  "burgir",
  "chat",
  "chat",
  "chat Masala",
]);
console.log(setsMethod);
//duplicate remove
//sets method
//.add
setsMethod.add("Aluchop");
console.log(setsMethod);
//.delete
setsMethod.delete("chat Masala");
console.log(setsMethod);

console.log(setsMethod.has("pizza")); //true
console.log(setsMethod.has("masala")); //false
for (const food of setsMethod) {
  console.log(food); //log all food......
}

const str = new Set("Rahul Kumar Parida");
console.log(str);

//Set(12) { 'R', 'a', 'h', 'u', 'l', ' ', 'K', 'm', 'r', 'P', 'i', 'd' }

//We also use manipulate array using set method...

//13)😍Maps Fundamentals :
const NewMap = new Map();
NewMap.set("Name1", "Rahul Kumar");
NewMap.set("Name2", "satish Kumar");
NewMap.set("Name3", "Himanshu Kumar");
NewMap.set("Name4", "Satya Kumar");
console.log(NewMap);
// Map(4) {
//   'Name1' => 'Rahul Kumar',
//   'Name2' => 'satish Kumar',
//   'Name3' => 'Himanshu Kumar',
//   'Name4' => 'Satya Kumar'
// }
//multiple add
NewMap.set("ra1", 23).set("Ra2", 45).set("ree1", 222);
console.log(NewMap); //these value also add

//.get method
console.log(NewMap.get("Name1")); //Rahul Kumar
//Maps Iteration
//convert object to map

const openingHour2 = {
  n1: "Real",
  n2: "Jayanagar",
  n3: "Ramk 18",
  openingHour,
};

const newMapp = new Map(Object.entries(openingHour2));
console.log(newMapp);
// Map(4) {
//   'n1' => 'Real',
//   'n2' => 'Jayanagar',
//   'n3' => 'Ramk 18',
//   'openingHour' => { n: 'Rahul', h: 'anji', r: 'rank 17' }
// }

//14😍Working With array;

const airline = "AIR ASIA";
const plane = "ASIA";

console.log(plane[0]); //A
console.log("34432"[0]); //3

console.log(airline.length); //8
console.log(airline.indexOf("A")); //0
console.log(airline.lastIndexOf("A")); //7
console.log(airline.slice(4)); //ASIA
console.log(airline.slice(4, 6)); //AS

const newStr = new String("JoNas");
console.log(...newStr); //J o n a s
console.log(newStr); //[String: 'Jonas']

//15)😍fix capitalization in name

console.log(newStr.toUpperCase()); //JONAS
console.log(newStr.toLowerCase()); //jonas

const newTrimMethod = " hello guys i am% new in this industry";
console.log(newTrimMethod); //       hello guys i am% new in this industry
console.log(newTrimMethod.trim()); //hello guys i am% new in this industry  //space remove
console.log(newTrimMethod.replace("%", "$ ")); //hello guys i am$  new in this industry
//boolean
console.log(newTrimMethod.includes("hello")); //true

console.log(newTrimMethod.startsWith(" ")); //true bucz starts eith space

//16)😍split() and join() method...
console.log(" hello guys i am% new in this industry".split(" "));
// [
//   '',         'hello',
//   'guys',     'i',
//   'am%',      'new',
//   'in',       'this',
//   'industry'
// ]

// const neww = ["mr", "Rahul", "Parida"];
// console.log(neww.join("+")); //mr+Rahul+Parida

//17)😍padding method
console.log("jonas".padStart(24,"+"));  //+++++++++++++++++++jonas
//18)😍repeat method
console.log(newTrimMethod.repeat(6)); //repeat 6 baar

*/
// The end 
