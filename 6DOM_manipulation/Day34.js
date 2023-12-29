// "use strict";
//Scoping in Practice


function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = ` you are now ${age} years old!`;
    console.log(output);

    if (birthYear >= 1990 && birthYear <= 1996) {
      var str1 = true;
      const firstname = "Rahul";
      const str = ` you are a milianion ${firstname}`;
      console.log(str);
      output = "New Output";
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str)  // error bucz block scope  can't called const and let keyword
    console.log(str1); // it returns true bucz for var keyword
    // console.log(add(12, 12));   //it returns error when strict mode is on
    console.log(output);
  }
  printAge();
  return age;
}
let firstname = "jonas";
const check = calcAge(1991);
console.log(check);

// printAge()  //refference error
// console.log(age);   //refference error