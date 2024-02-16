"use strict";
//destructring arrays
const arr = ["rahul", "kumar", "parida", "real", "secret"];
const [a, b, c] = arr;
console.log(a, b, c);

const profile = {
  Name: "Rahul Kumar Parida",
  RegdNo: 23240025,
  Course: "MCA",
  Semester: ["1st", "2nd"],
  Subjects1: ["WDT", "COA", "ICT", "MME", "RM", "ENGLISH", "LAB"],
  Subjects2: ["DBMS", "OS", "CN", "DADA", "OE", "LAB"],
  display: function (first) {
    console.log(
      `${this.Semester[first]} semester subjects are ${this.Subjects1} `
    );
  },
};
profile.display(0);

// let [first, second] = profile.Subjects1;
// console.log(first, second);
// first = "DSA";
// second = "WEB";
// console.log(first, second);
// console.log(profile.Subjects1);

//destructuring objects

const { RegdNo, Course, Semester } = profile;
console.log(RegdNo, Course, Semester); //why undefined

const { Name: r, Course: m, Semester: s } = profile;
console.log(r,s,m);
