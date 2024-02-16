"use strict";
//string-1
const airline = "AIR ASIA";
const plane = "ASIA";

console.log(plane[0]); //A
console.log(plane[1]); //S

console.log("3452"[0]); //3

console.log(airline.length); //8
console.log("MMKS".length); //4

console.log(airline.indexOf("A")); //0
console.log(airline.lastIndexOf("A")); //7
console.log(airline.indexOf("ASIA")); //4

console.log(airline.slice(4)); //ASIA
console.log(airline.slice(4, 6)); //AS

console.log(airline.slice(0, airline.indexOf(" "))); //AIR
console.log(airline.slice(airline.indexOf(" ") + 1)); //ASIA

console.log(airline.slice(-2)); //8-2=6 to start //IA
console.log(airline.slice(1, -1)); //1 to 7 to start  //IR ASI

//Example

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the Middle seat");
  else console.log("You are lucky");
};
checkMiddleSeat("11B"); //you got the middle seat
checkMiddleSeat("23C"); //you are lucky
checkMiddleSeat("3E"); //you got the middle seat

console.log(new String("jonas")); // string{'jonas}
console.log(typeof new String("jonas")); //object

console.log(typeof new String("jonas").slice(1)); //string

//Fix Capitalization In Name....

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower); //jonas

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //jonas

//Comparing Emails
const email = "hello@jonas.io";
const loginEmail = "Hello@jonas.Io \n";
console.log(loginEmail); //Hello@jonas.Io

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(lowerEmail); //hello@jonas.io
console.log(trimmedEmail); //hello@jonas.io

const normaLizedEmail = loginEmail.toLowerCase().trim();
console.log(normaLizedEmail); //hello@jonas.io

console.log(email === normaLizedEmail); //true
console.log(email === trimmedEmail); //true
console.log(email === lowerEmail); //false

//replacing..........
const priceGB = "279,96£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announce = "All passengers come to boarding door 23. Boarding door 23!";

//one change
console.log(announce.replace("door", "gate"));
//all change
console.log(announce.replaceAll("door", "gate"));

//multiple chnage (regular expressions)
console.log(announce.replace(/door/g, "gate"));

//booleans
const planee = "Airbus A320neo";
console.log(planee.includes("A320"));
console.log(planee.includes("boil"));
console.log(planee.includes("Airb"));

if (planee.startsWith("Airbus") && planee.endsWith("neo")) {
  console.log("New Airbus Family");
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a  gun and a laptop");
checkBaggage("I have a laptop");
checkBaggage("I have a  knife and a laptop");

//working with strings part-3

//split and join..
console.log("a+very+nice+string".split("+"));
console.log("Rahul Parida".split(" "));

const [firsname, Lastname] = "Rahul parida".split(" ");
console.log(firsname, Lastname);

const newName = ["Mr.", firsname, Lastname.toUpperCase()].join(" ");
console.log(newName);

//capitalize
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesupper = [];
  for (const n of names) {
    // namesupper.push(n[0].toUpperCase() + n.slice(1));
    namesupper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesupper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("rahul parida");

//padding...

const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("jonas".padStart(30, "+"));

//master Card
const maskMasterCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  console.log(last);
  console.log(last.padStart(str.length, "*"));
};
maskMasterCard(3276476763);
maskMasterCard(338478372276476763);
maskMasterCard(53847374878376763);

//repeat...........
const msg = "hello gus repeat...";
console.log(msg.repeat(4));

//practice arrays
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
