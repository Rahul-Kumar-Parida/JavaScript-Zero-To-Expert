"use strict";

/*
//1)👋what is function:  function is set of statements , that takes input and do some computation and gives output when it calls,
//Basic Functions in javascript,,,,,,,,,,

//activating strict mode,.....
let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("can Drive");

//2)👋strict modes makes...................................
// strict mode makes it easier for us developers to avoid accidental errors (introduce bugs into our code )

// function in javascript.............................
// javascript function is set of instructions that takes input do some computations and gives output, a function is execute when something invokes it

//example of function

function logger() {
  console.log("I am rahul");
}
logger();

function add(a, b) {
  return a + b;
}
const adding = add(4, 5);
console.log(adding);

function check(para) {
  if (para === "Hyy" || para === "Hi" || para === "Hello" || para === "hii") {
    console.log("How Can I Help You");
  } else {
    console.log("How can I help you");
  }
}
check("hiii");

//3)👋There are 3 types of function
//function declaration

function calcAge(age) {
  console.log(`Your age is ${2024 - age}`);
}
calcAge(2002);

//function expression
const point = function (pointNum) {
  console.log(pointNum / 100);
};
point(23);

//Arrow function...
const plus = (birthyear) => "hello";
console.log(plus());

const functionName = (parameters) => "I am logged";
console.log(functionName());

//function call another function
function cutting(things) {
  return things * 4;
}
function juice(apple, oranges) {
  const apple1 = cutting(apple);
  const orange1 = cutting(oranges);
  const juice = `apple cuts into ${apple1} parts and oranges cuts into ${orange1} parts`;
  return juice;
}

console.log(juice(5, 6));
*/

//4)👋function parameter....
//default parameter...'
function deflt(num1, num2 = 4, add = 11) {
  if (num1 + num2 === add) {
    console.log("you are hired");
  } else {
    console.log("You are fired");
  }
}
deflt(3, undefined, undefined);

//5)👋 How Passing arguments works: Value vs. reference...

//pass by value (let const boolean etc..) this is also call primititive datatype
let a = 8;
let b = a;

b = b + 9;
console.log(a);
console.log(b);

//pass by reference (array, objects) this is also called as nonprimitive datatype
const userInterface = {
  name: "Rahul Kumar Parida",
  LogId: 23240025,
};

function checkIn(check) {
  if (check.LogId === 23240025) {
    console.log("You Are Student at Outr,bbsr");
  } else {
    console.log("You are not a student at Outr,bbsr");
  }
}
console.log(userInterface);
checkIn(userInterface);
//now i want update something here
userInterface.LogId = 23240030;
checkIn(userInterface);
console.log(userInterface);
//finally clear ........

//6)👋first class citizens in functions.....
//1) function assign to a variable.........

const assignfun = function () {
  console.log("my father name is function");
};

assignfun();

//2) function pass as an argument..........
const greet = () => "hello";

const namee = function (name1, greeting) {
  console.log(greeting() + " " + name1);
};

namee("Rahul Kumar", greet);

//3) function returning......
function c() {
  return function b() {
    console.log("I am a returning function");
  };
}
c()(); //I am a returning function
const logg = c();
logg(); //I am a returning function

//7)👋What is call back function..............

//method 1;
const oneWord = function () {
  console.log("I am a last execute");
};
const anotherWord = function (one, two) {
  setTimeout(function () {
    console.log(`my name is ${one}`);
    two();
  }, 3000);
};

// anotherWord("Rahul", oneWord);

//9)👋Higher Order Functions.................
const interviewQuestions = (StudentName, StudentID) => {
  if (StudentName === "Rahul" && StudentID === 23240025) {
    return function (questions) {
      console.log(`Hyy ${StudentName} , 1) What is ${questions}? plz Explain.`);
    };
  } else if (StudentName === "Satish" && StudentID === 23240029) {
    return function (questions) {
      console.log(`Hyy ${StudentName} , 1) What is ${questions}? plz Explain.`);
    };
  } else if (StudentName === "Satyabrata" && StudentID === 23240030) {
    return function (questions) {
      console.log(`Hyy ${StudentName} , 1) What is ${questions}? plz Explain.`);
    };
  } else if (StudentName === "Himanshu" && StudentID === 23240008) {
    return function (questions) {
      console.log(`Hyy ${StudentName} , 1) What is ${questions}? plz Explain.`);
    };
  } else {
    return function () {
      console.log("You are Not Verified!!!");
    };
  }
};
// interviewQuestions("Rahul", 23240025)("Javascript");
// interviewQuestions("Satish", 23240029)("React");
// interviewQuestions("Satyabrata", 23240030)("Mango DB");
// interviewQuestions("Himanshu", 23240008)("Node Js");

const prep = interviewQuestions("Rahul", 23240025);
prep("DBMS");
prep("CN");
prep("OS");

//10)👋IIFE(Immediately invoked function expressions)

// (function () {
//   console.log("It is a IIFE");
// })();

// (() => console.log("i am also IIFE"));

//11)👋closures in functions......

const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`The Sum of a + b is: ${sum}`);
  };
  // innerFun(); *
  return innerFun;
};
//m-1
//* outerFun(4);// The Sum of a + b is: 14
//m-2 when return declared...
let inner = outerFun(7);
inner(); //The Sum of a + b is: 17


//12)👋call() methods.......

const youtuber1 = {
  Name: "Trigger Insaan",
  Subscriber: "23M",
  feature: function (arg) {
    console.log(
      `${this.Name} have completed ${this.Subscriber} and her gang name is ${arg}`
    );
  },
};

youtuber1.feature("panda");
//Fukra Insaan have completed 10M

// now i want to add same feature on another youtuber objects,
const youtuber2 = {
  Name: "Fukra Insaan",
  Subscriber: "10M",
};

youtuber1.feature.call(youtuber2, "panda");
//Fukra Insaan have completed 10M
//This tis the call method..
// if you want to pass argument in feature function as "panda"

//13)👋Apply() methods.....
youtuber1.feature.apply(youtuber2, ["panda"]);
//the apply method takes arguments as an array.....

//another uses apply method..
const maxNum = [1, 22, 333, 44];
console.log(Math.max.apply(null, [1, 2, 3, 3, 44, 333]));

//14)👋bind method......

// i want to bind youtuber1 object

let bindFun = youtuber1.feature.bind(youtuber1);
bindFun("pandaa");

//15)👋 anynomous function
//without name functions.....
